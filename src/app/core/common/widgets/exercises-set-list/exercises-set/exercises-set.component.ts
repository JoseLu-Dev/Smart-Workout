import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercises-set',
  templateUrl: './exercises-set.component.html',
  styleUrls: ['./exercises-set.component.scss'],
})
export class ExercisesSetComponent implements OnInit {

  @Input() exer: any;

  constructor() { }

  ngOnInit() {}

}
