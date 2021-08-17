import { UserDataService } from '../../../../../services/user-data.service';
import { ExerciseSet } from '../../../../../models/training.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-item-list-strategy',
  templateUrl: './multiple-item-list-strategy.component.html',
  styleUrls: ['./multiple-item-list-strategy.component.scss'],
})
export class MultipleItemListStrategyComponent implements OnInit {

  @Input() set: ExerciseSet;

  userWeight: number;

  constructor(private userStatsService: UserDataService) { }

  ngOnInit() {
    this.userStatsService.getWeight().subscribe(weight => this.userWeight = weight);
  }

  weightString(num: number): string {
    if (num > 0) { return `+ ${num}`; }
    return `- ${Math.abs(num)}`;
  }
}
