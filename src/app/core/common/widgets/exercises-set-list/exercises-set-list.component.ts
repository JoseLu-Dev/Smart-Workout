import { Observable } from 'rxjs';
import { TrainingsService } from '../../services/trainings-form.service';
import { ExerciseSet, ExerciseSetPart, Intensity, Band, BandUsed } from './../../models/exercise-set.model';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  public exercisesSets = new Observable<ExerciseSet[]>();

  constructor(private trainingsService: TrainingsService) { }

  ngOnInit() {
    this.exercisesSets = this.trainingsService.getSetsList();
  }

}
