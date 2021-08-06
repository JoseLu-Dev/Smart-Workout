import { NewTrainingModalComponent } from './../../modals/new-training-modal/new-training-modal.component';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TrainingsDay } from '../../models/trainings-day.model';
import { TrainingsService } from '../../services/trainings.service';
import { Training } from '../../models/training.models';

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
   * Training selected
   */
  @Output() trainingSelected = new EventEmitter<Training>();

  /**
   * Instance of the child component (BandsModal) to use its methods
   */
  @ViewChild(NewTrainingModalComponent)
  newTrainingModal: NewTrainingModalComponent;

  constructor(private trainingService: TrainingsService) { }

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
   * Outputs the training selected
   */
  onTrainingClicked(training: Training) {
    this.trainingSelected.next(training);
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
