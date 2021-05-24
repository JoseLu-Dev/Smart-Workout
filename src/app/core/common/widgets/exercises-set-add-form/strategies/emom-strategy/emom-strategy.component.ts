import { BaseStrategy } from './../base-strategy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emom-strategy',
  templateUrl: '../common-strategy/common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class EmomStrategyComponent extends BaseStrategy implements OnInit {

  constructor() { super() }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = false;
  }

}
