import { BaseStrategyComponent } from '../base-strategy.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emom-strategy',
  templateUrl: '../common-strategy.component.html',
  styleUrls: ['../../exercises-set-add-form.component.scss'],
})
export class EmomStrategyComponent extends BaseStrategyComponent implements OnInit {

  constructor(private builder: FormBuilder) { super(builder); }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = false;
    super.ngOnInit();
  }

}
