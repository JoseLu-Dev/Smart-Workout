import { BaseStrategyComponent } from '../base-strategy.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-circuit-strategy',
  templateUrl: '../common-strategy.component.html'
})
export class CircuitExerciseStrategyComponent extends BaseStrategyComponent implements OnInit {

  constructor(private builder: FormBuilder) {
    super(builder);
  }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = true;
    super.ngOnInit();
  }



}
