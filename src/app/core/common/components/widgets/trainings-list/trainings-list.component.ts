import { TrainingSpecs } from '../../../models/trainings-day.model';
import { NewTrainingModalComponent } from '../../modals/new-training-modal/new-training-modal.component';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TrainingsDay } from '../../../models/trainings-day.model';
import { TrainingsService } from '../../../services/trainings.service';
import { Training } from '../../../models/training.models';
// eslint-disable-next-line max-len
import { TrainingCreationOptions, TrainingCreationOptionsModalComponent } from '../../modals/training-creation-options-modal/training-creation-options-modal.component';
import { TrainingSelectionModalComponent } from '../../modals/training-selection-modal/training-selection-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  /**
   * Boolean that indicates if create training should be hided
   */
  @Input() inModal: boolean;

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
  @Output() trainingSelected = new EventEmitter<TrainingSpecs>();

  /**
   * Instance of the child component (NewTrainingModalComponent) to use its methods
   */
  @ViewChild(NewTrainingModalComponent)
  newTrainingModal: NewTrainingModalComponent;

  /**
   * Instance of the child component (TrainingCreationOptionsModalComponent) to use its methods
   */
  @ViewChild(TrainingCreationOptionsModalComponent)
  newTrainingOptionsModal: TrainingCreationOptionsModalComponent;

  /**
   * Instance of the child component (TrainingSelectionModalComponent) to use its methods
   */
  @ViewChild(TrainingSelectionModalComponent)
  trainingSelectionModal: TrainingSelectionModalComponent;

  constructor(
    private trainingService: TrainingsService,
    private router: Router,) { }

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
    this.newTrainingOptionsModal.openModal();
  }

  onNewTrainingOptionSelected(option: TrainingCreationOptions) {
    switch (option) {
      case TrainingCreationOptions.existing:
        this.trainingSelectionModal.openModal();
        break;
      case TrainingCreationOptions.new:
        this.newTrainingModal.openModal();
        break;
    }
  }

  /**
   * Outputs the training selected
   */
  onTrainingClicked(training: TrainingSpecs) {
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

  onTrainingSelectedToCopy(training: TrainingSpecs) {
    if (!this.trainingsDay) {
      this.trainingsDay = new TrainingsDay();
      this.trainingsDay.setDate(this.date);
    }

    this.trainingsDay.trainings.push(training);

    this.trainingService.putTrainingFromExisting(this.trainingsDay, this.date).subscribe(trainingId => {
      this.router.navigate([`app/trainings/edit/${trainingId}`], { replaceUrl: false });
    });
  }
}
