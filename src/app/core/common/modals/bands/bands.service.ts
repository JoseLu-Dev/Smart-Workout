import { Injectable } from '@angular/core';
import { Band } from '../../models/exercise-set.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  /**
   * Multipliers used when calculating band aproximate resistance
   */
  halfUseMultiplier = 0.5;
  oneEndMultiplier = 0.5;

  constructor() { }

  /**
   * Gets the user bands
   *
   * @returns Band[] user bands
   */
  getUserBands(): Band[] {
    return [
      { color: '#33d4ff', weight: 20 },
      { color: '#775522', weight: 10 },
      { color: '#113388', weight: 40 }
    ];
  }

  getBandResistance(band: Band, fullUse: boolean, twoEnds: boolean): number {
    return 0;
  }
}
