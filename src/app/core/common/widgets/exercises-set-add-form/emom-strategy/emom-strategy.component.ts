import { Component, OnInit } from '@angular/core';
import { ExercisesSetsForm } from '../exercises-set-add-form.interface';

@Component({
  selector: 'app-emom-strategy',
  templateUrl: '../common-strategy/common-strategy.component.html',
  styleUrls: ['../exercises-set-add-form.component.scss'],
})
export class EmomStrategyComponent implements OnInit, ExercisesSetsForm {

  set: any;

  constructor() { }

  ngOnInit() {}

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
