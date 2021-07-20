import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-per-muscle-table',
  templateUrl: './count-per-muscle-table.component.html',
  styleUrls: ['./count-per-muscle-table.component.scss'],
})
export class CountPerMuscleTableComponent implements OnInit {

  @Input() countPerMuscle;
  @Input() muscles;

  @Input() unit;

  constructor() { }

  ngOnInit() {}

}
