import { Router } from '@angular/router';
import { TrainingsService } from '../../../services/trainings.service';
import { TrainingsDay, TrainingSpecs } from '../../../models/trainings-day.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { DaysService } from '../../../services/days.service';

@Component({
  selector: 'app-new-training-modal',
  templateUrl: './new-training-modal.component.html',
  styleUrls: ['./new-training-modal.component.scss'],
})
export class NewTrainingModalComponent implements OnInit {

  @Input() date: Date;

  @Input() trainingsDay: TrainingsDay;

  /**
   * Modal id
   */
  id = `new-training-modal${Math.random()}`;

  /**
   * Training form
   */
  public trainingForm: FormGroup;

  public color: string;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private trainingsService: TrainingsService,
    private router: Router,
    private daysService: DaysService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.trainingForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
    });
  }

  /**
   * Uses Modal Service to open a Modal Window (content in html template)
   * using the id provided in params
   */
  openModal() {
    this.modalService.open(this.id);
  }

  /**
   * Uses Modal Service to close a Modal Window (content in html template)
   * using the id provided in params
   */
  closeModal() {
    this.onModalClosed();
    this.modalService.close(this.id);
  }

  /**
   * Resets the form when the modal is closed
   */
  onModalClosed() {
    this.color = '';
    this.buildForm();
  }

  onSubmit(): void {
    if (!this.trainingsDay) {
      this.trainingsDay = new TrainingsDay();
      this.trainingsDay.setDate(this.date);
    }

    const trainingSpecs = {
      name: this.trainingForm.value.name,
      color: this.color,
      completed: false
    } as TrainingSpecs;
    this.trainingsDay.trainings.push(trainingSpecs);

    this.trainingsService.saveTrainingDay(this.trainingsDay).subscribe(
      training => {
        const trainingDay = training as TrainingsDay;
        this.router.navigate([`app/trainings/edit/${trainingDay.trainings[trainingDay.trainings.length - 1].id}`], { replaceUrl: false });
        this.daysService.addTrainingDay(new Date(trainingDay.date).getMonth(), trainingDay);
      },
      err => {
        console.log(err);
      }
    );

    this.closeModal();
  }

  colorStringValid(): boolean {
    return /^#[0-9A-F]{6}$/i.test(this.color);
  }
}
