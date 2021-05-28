import { SecondsFormatPipe } from './../../../../pipes/seconds-format.pipe';
import { SetQuantityFormatterPipe } from './../../../../pipes/set-quantity-formatter.pipe';
import { Exercise } from './../../../../models/exercise.model';
import { ExerciseSet, BandUsed } from './../../../../models/exercise-set.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-item-list-strategy',
  templateUrl: './normal-item-list-strategy.component.html',
  styleUrls: ['./normal-item-list-strategy.component.scss'],
})
export class NormalItemListStrategyComponent implements OnInit {

  @Input() public set set(set: ExerciseSet) {
    this.setsCount = set.setsCount;
    this.exercise = set.setParts[0].exercise;

    const quantities = new Array<number>();
    const rests = new Array<number>();
    const weights = new Array<number>();

    for (const setPart of set.setParts) {
      this.bands.push(setPart.intensity.band);

      quantities.push(setPart.quantity);
      rests.push(setPart.rest);
      weights.push(setPart.intensity.weight);
    }

    const maxQuantity = Math.max(...quantities);
    const minQuantity = Math.min(...quantities);
    this.quantity = minQuantity === maxQuantity ?
      this.setQuantityFormatter.transform(maxQuantity) :
      `${minQuantity}-${this.setQuantityFormatter.transform(maxQuantity)}`;

    const maxRest = Math.max(...rests);
    const minRest = Math.min(...rests);
    this.rest = minRest === maxRest ?
      this.secondsFormatter.transform(maxRest) :
      `${this.secondsFormatter.transform(minRest)}-${this.secondsFormatter.transform(maxRest)}`;

    const maxWeight = Math.max(...weights);
    const minWeight = Math.min(...weights);
    this.weight = minWeight === maxWeight ?
      `${maxWeight} kg` :
      `${minWeight}-${maxWeight} kg`;

  }

  public exercise: Exercise;
  public setsCount: number;

  public quantity: string;
  public weight: string;
  public rest: string;

  public bands = new Array<BandUsed>();


  constructor(
    private setQuantityFormatter: SetQuantityFormatterPipe,
    private secondsFormatter: SecondsFormatPipe,
  ) { }

  ngOnInit() { }

}
