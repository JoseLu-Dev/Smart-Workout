import { Injectable } from '@angular/core';
import { Band } from '../../models/exercise-set.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor() { }

  /**
   * Gets the user bands
   * @returns Band[] user bands
   */
  getUserBands(): Band[] {
    return [
      { color: '#33d4ff', weight: 20 },
      { color: '#775522', weight: 10 },
      { color: '#113388', weight: 40 }
    ]
  }
}
