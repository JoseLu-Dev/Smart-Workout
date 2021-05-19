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

  /**
   * Calculates the band aproximated resistance depending 
   * on ends used and if the band is used completely
   * 
   * @param band band used to calculate resistance
   * @param fullUse boolean indicating if the band is being used completely
   * @param twoEnds boolean indicating if band is being used with twoEnds
   * @returns band resistance calculated
   */
  getBandResistance(band: Band, fullUse: boolean, twoEnds: boolean): number {
    if (!fullUse) {twoEnds = false;}

    const fullHalfUseMultiplier = fullUse ? 1 : this.halfUseMultiplier;
    const endsNumberMultiplier = twoEnds ? 1 : this.oneEndMultiplier;

    return band.weight * fullHalfUseMultiplier * endsNumberMultiplier;
  }
}
