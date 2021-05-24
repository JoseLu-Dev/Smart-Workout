import { BaseStrategy } from './../base-strategy';
import { ExerciseSet, ExerciseSetPart } from './../../../../models/exercise-set.model';
import { BandUsed } from '../../../../models/exercise-set.model';
import { Exercise } from '../../../../models/exercise.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccordionComponent } from '../../../accordion/accordion.component';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent extends BaseStrategy implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
  }

}
