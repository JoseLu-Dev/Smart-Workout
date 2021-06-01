import { NewTrainingModalComponent } from './../../modals/new-training-modal/new-training-modal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TrainingsDay } from '../../models/trainings-day.model';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
})
export class TrainingsListComponent implements OnInit {

  /**
   * Trainings that will be shown
   */
  @Input() trainingsDay: TrainingsDay;

  /**
   * Instance of the child component (BandsModal) to use its methods
   */
  @ViewChild(NewTrainingModalComponent)
  newTrainingModal: NewTrainingModalComponent;

  constructor() { }

  ngOnInit() {}

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
}
