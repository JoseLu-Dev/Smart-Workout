import { Component, OnInit } from '@angular/core';
import { CommonSetsForm } from '../common-strategy/common-set-form.interface';
import { ExercisesSetsForm } from '../../exercises-set-add-form.interface';

@Component({
  selector: 'app-emom-strategy',
  templateUrl: './.html',
  //templateUrl: '../common-strategy/common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class EmomStrategyComponent implements OnInit, ExercisesSetsForm, CommonSetsForm {

  set: any;

  public multiExercise: boolean;
  public restBetweenExercises: boolean;

  constructor() { }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = false;
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
