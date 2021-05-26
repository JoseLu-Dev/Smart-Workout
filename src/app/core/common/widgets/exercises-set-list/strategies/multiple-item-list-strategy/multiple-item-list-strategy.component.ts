import { ExerciseSet } from './../../../../models/exercise-set.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-item-list-strategy',
  templateUrl: './multiple-item-list-strategy.component.html',
  styleUrls: ['./multiple-item-list-strategy.component.scss'],
})
export class MultipleItemListStrategyComponent implements OnInit {

  @Input() set: ExerciseSet;

  constructor() { }

  ngOnInit() {}

}
