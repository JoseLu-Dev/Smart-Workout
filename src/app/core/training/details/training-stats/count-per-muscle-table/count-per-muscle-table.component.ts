import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-per-muscle-table',
  templateUrl: './count-per-muscle-table.component.html',
  styleUrls: ['./count-per-muscle-table.component.scss'],
})
export class CountPerMuscleTableComponent implements OnInit {

  @Input() set countPerMuscle(countPerMuscleArray: number[]) {
    if(!countPerMuscleArray){return;}
    this.countPerMuscleArray = countPerMuscleArray;
    this.calculateMinMax();
  }

  @Input() muscles: string[];

  @Input() unit;

  countPerMuscleArray: number[];

  maxValue: number;
  minValue: number;

  constructor() { }

  ngOnInit() {}

  calculateMinMax(){
    this.maxValue = Math.max(...this.countPerMuscleArray);
    this.minValue = Math.min(...this.countPerMuscleArray);
  }

}
