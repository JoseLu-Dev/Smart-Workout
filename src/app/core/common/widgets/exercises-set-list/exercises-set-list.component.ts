import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  public exercisesSets = [
    {
      set: [
        {
          exercise: {
            name: 'front lever', progression: 'full', variation: 'prone',
            bodyWeight: true, muscle: 'lats', static: true
          },
          quantity: 20,
          rest: 90
        }
      ],
      setsCount: 4,
      finalRest: 180
    },
    {
      set: [
        {
          exercise: {
            name: 'front lever pull ups', progression: 'full', variation: 'prone',
            bodyWeight: true, muscle: 'lats', static: false
          },
          intensity: {
            band: { color: '#dfed1c', fullUse: true, weight: -7 },
            weight: -10
          },
          quantity: 5,
          rest: 90
        }
      ],
      setsCount: 4,
      finalRest: 180
    },
    {
      set: [
        {
          exercise: {
            name: 'pull ups', variation: 'prone',
            bodyWeight: true, muscle: 'lats', static: false
          },
          quantity: 10,
        }
      ],
      type: 'emom',
      setsCount: 4,
      finalRest: 180
    },
    {
      set: [
        {
          exercise: {
            name: 'pull ups', variation: 'prone',
            bodyWeight: true, muscle: 'lats', static: false
          },
          quantity: 8,
        },
        {
          exercise: {
            name: 'pull ups', variation: 'supine',
            bodyWeight: true, muscle: 'lats', static: false
          },
          quantity: 12,
          rest: 120
        }
      ],
      type: 'super set',
      setsCount: 4,
      finalRest: 180
    }
  ];

  public UserBodyWeight = 60;

  constructor() { }

  ngOnInit() { }

}
