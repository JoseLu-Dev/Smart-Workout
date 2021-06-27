import { Router } from '@angular/router';
import { NewTrainingModalComponent } from './../../modals/new-training-modal/new-training-modal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TrainingsDay } from '../../models/trainings-day.model';
import { TrainingsService } from '../../services/trainings.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  /**
   * Date of the day showing
   */
  @Input() date: Date;

  /**
   * Trainings that will be shown
   */
  @Input() trainingsDay: TrainingsDay;

  /**
   * Instance of the child component (BandsModal) to use its methods
   */
  @ViewChild(NewTrainingModalComponent)
  newTrainingModal: NewTrainingModalComponent;

  constructor(
    private router: Router,
    private trainingService: TrainingsService) { }

  ngOnInit() { }

  /**
   * Indicates if the day the component is showing has passed
   */
  dayHasPassed(): boolean {
    const today = new Date();
    const daySelected = new Date(this.trainingsDay.date);
    daySelected.setHours(23);
    const dayHasPassed = daySelected.getTime() < today.getTime();
    return dayHasPassed;
  }

  /**
   * Opens new training modal
   */
  onAddTrainingClicked() {
    this.newTrainingModal.openModal();
  }

  /**
   * Goes to training page when training is clicked
   */
  onTrainingClicked(id: string) {
    this.router.navigate([`app/trainings/${id}`], { replaceUrl: false });
  }

  /**
   * Delete training
   */
  onDeleteTrainingClicked(event, trainingNumber: number) {
    this.trainingService.deleteTraining(this.trainingsDay.trainings[trainingNumber].id);

    this.trainingsDay.trainings.splice(trainingNumber, 1);

    this.trainingService.saveTrainingDay(this.trainingsDay).subscribe();

    // Makes father onClick not to execute
    event.stopPropagation();
  }
}
