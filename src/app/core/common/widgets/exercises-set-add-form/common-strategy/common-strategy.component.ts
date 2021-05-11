import { Component, OnInit } from '@angular/core';
import { ExercisesSetsForm } from '../exercises-set-add-form.interface';

@Component({
  selector: 'app-common-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../exercises-set-add-form.component.scss'],
})
export class CommonStrategyComponent implements OnInit, ExercisesSetsForm {

  set: any;

  constructor() { }

  ngOnInit() { }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
