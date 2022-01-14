import { Router } from '@angular/router';
import { TrainingsService } from '../../../services/trainings.service';
import { TrainingsDay, TrainingSpecs } from '../../../models/trainings-day.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { DaysService } from '../../../services/days.service';

@Component({
  selector: 'app-new-training-modal',
  templateUrl: './new-training-modal.component.html',
  styleUrls: ['./new-training-modal.component.scss'],
})
export class NewTrainingModalComponent implements OnInit, OnChanges {

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

  private editing = false;
  private indexEditing: number;

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

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
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
    this.editing = false;
  }

  onSubmit(): void {
    if (this.editing) {
      this.onSubmitEdit();
    } else {
      this.onSubmitNew();
    }

    this.closeModal();
  }

  onSubmitNew() {
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
  }

  onSubmitEdit() {
    if (!this.trainingValuesHasBeenChanged()) {
      return;
    }
    this.trainingsDay.trainings[this.indexEditing].color = this.color;
    this.trainingsDay.trainings[this.indexEditing].name = this.trainingForm.get('name').value;

    this.trainingsService.updateTrainingDay(this.trainingsDay).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  trainingValuesHasBeenChanged(): boolean {
    return this.trainingsDay.trainings[this.indexEditing].color !== this.color ||
      this.trainingsDay.trainings[this.indexEditing].name !== this.trainingForm.get('name').value;
  }

  colorStringValid(): boolean {
    return /^#[0-9A-F]{6}$/i.test(this.color);
  }

  setTrainingToEdit(index: number): void {
    this.editing = true;
    this.indexEditing = index;
    this.initializeEditForm(this.trainingsDay.trainings[index]);
  }

  initializeEditForm(trainingSpecs: TrainingSpecs): void {
    this.trainingForm = this.formBuilder.group({
      name: [trainingSpecs.name, Validators.compose([Validators.required, Validators.maxLength(20)])],
    });
    this.color = trainingSpecs.color;
  }
}
