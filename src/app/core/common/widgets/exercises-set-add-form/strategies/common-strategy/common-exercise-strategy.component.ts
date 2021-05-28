import { BaseStrategyComponent } from '../base-strategy.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: '../common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent extends BaseStrategyComponent implements OnInit {

  constructor(private builder: FormBuilder) {
    super(builder);
  }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
    super.ngOnInit();
  }

}
