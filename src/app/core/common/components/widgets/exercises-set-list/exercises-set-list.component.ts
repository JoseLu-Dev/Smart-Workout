import { Observable } from 'rxjs';
import { TrainingsComponentCommunicationService } from '../../../services/trainings-component-communication.service';
import { Training } from '../../../models/training.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../../../services/trainings.service';
import { TrainingSpecs } from '../../../models/trainings-day.model';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  @Input() editing: boolean;

  @Output() trainingSpecs = new EventEmitter<TrainingSpecs>();

  public training = new Observable<Training>();

  constructor(
    private trainingsService: TrainingsComponentCommunicationService,
    private route: ActivatedRoute,
    private trainingsServiceApi: TrainingsService,) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsService.getTrainingFromAPI(id);

    this.training = this.trainingsService.getTraining();

    this.training.subscribe(training => {
      if(!training){return;}
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
