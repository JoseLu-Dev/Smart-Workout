import { ExerciseSet, ExerciseSetPart, Intensity, Band, BandUsed } from './../../models/exercise-set.model';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  public exercisesSets: ExerciseSet[] = new Array<ExerciseSet>();

  constructor() { }

  ngOnInit() {
    const set1 = new ExerciseSet();
    set1.finalRest = 360;
    set1.setsCount = 4;
    set1.type = 'normal'

    const set1Part1 = new ExerciseSetPart();

    const set1Part1Exercise = new Exercise();
    set1Part1Exercise.name = 'front lever pull ups';
    set1Part1Exercise.progression = 'full';
    set1Part1Exercise.variation = 'prone';
    set1Part1Exercise.static = false;
    set1Part1.exercise = set1Part1Exercise;

    set1Part1.quantity = 10;
    set1Part1.rest = 120;
    const set1Part1Intensity = new Intensity();
    set1Part1Intensity.weight = 60;
    set1Part1Intensity.band = new BandUsed();
    set1Part1Intensity.band.color = '#4356fd'
    set1Part1Intensity.band.weight = -10;
    set1Part1.intensity = set1Part1Intensity;
    

    set1.setParts.push(set1Part1);
    set1.setParts.push(Object.create(set1Part1));
    set1.setParts.push(Object.create(set1Part1));

    this.exercisesSets.push(set1)

    const set2 = Object.create(set1);

    set2.setParts[2].rest = 300;
    set2.setParts[2].intensity.weight = 300;
    set2.setParts[2].quantity = 300;
    this.exercisesSets.push(set2)

   }

}
