import { UserStatsService } from './../../../../services/user-stats.service';
import { ExerciseSet } from '../../../../models/training.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-item-list-strategy',
  templateUrl: './multiple-item-list-strategy.component.html',
  styleUrls: ['./multiple-item-list-strategy.component.scss'],
})
export class MultipleItemListStrategyComponent implements OnInit {

  @Input() set: ExerciseSet;

  constructor(private userStatsService: UserStatsService) { }

  ngOnInit() { }

  getUserWeight() {
    return this.userStatsService.getWeight();
  }

  weightString(num: number): string {
    if(num > 0){ return `+ ${num}`;}
    return `- ${Math.abs(num)}`;
  }
}
