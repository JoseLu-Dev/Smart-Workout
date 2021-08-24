import { TrainingsComponentCommunicationService } from '../../../services/trainings-component-communication.service';
import { Training } from '../../../models/training.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../../../services/trainings.service';
import { TrainingSpecs } from '../../../models/trainings-day.model';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  @Input() editing: boolean;

  @Output() trainingSpecs = new EventEmitter<TrainingSpecs>();

  public training: Training;

  constructor(
    private trainingsService: TrainingsComponentCommunicationService,
    private route: ActivatedRoute,
    private trainingsServiceApi: TrainingsService,
    private dragulaService: DragulaService,) {
    dragulaService.destroy('SETS');
    dragulaService.createGroup('SETS', {
      moves: (el, container, handle) =>
        handle.id === 'dragger' ||
        handle.parentElement.id === 'dragger' ||
        handle.parentElement.parentElement.id === 'dragger'
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsService.getTrainingFromAPI(id);

    this.trainingsService.getTraining().subscribe(training => {
      this.training = training;

      if (!training) { return; }
      this.trainingsServiceApi.getTrainingSpecs(training.id).subscribe(trainingSpecs => {
        this.trainingSpecs.next(trainingSpecs);
      });
    });
  }

  onEditSetClicked(index: number) {
    this.trainingsService.setExerciseSetToEdit(index);
  }

  onDeleteSetClicked(index: number) {
    this.trainingsService.deleteExerciseSet(index);
  }

}
