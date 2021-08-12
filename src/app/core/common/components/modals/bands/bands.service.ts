import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Band } from '../../../models/training.models';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  /**
   * Multipliers used when calculating band aproximate resistance
   */
  halfUseMultiplier = 0.5;
  oneEndMultiplier = 0.5;

  private bandsUrl = `${environment.backendUrl}/users/bands`;

  constructor(private http: HttpClient) { }

  /**
   * Gets the user bands
   *
   * @returns Band[] user bands
   */
  getUserBands(): Observable<Band[]> {
    return this.http.get<Band[]>(`${this.bandsUrl}/`);
  }

  saveBand(band: Band): Observable<Band> {
    return this.http.put<Band>(`${this.bandsUrl}/`, band);
  }

  /**
   * Calculates the band approximated resistance depending
   * on ends used and if the band is used completely
   *
   * @param band band used to calculate resistance
   * @param fullUse boolean indicating if the band is being used completely
   * @param twoEnds boolean indicating if band is being used with twoEnds
   * @returns band resistance calculated
   */
  getBandResistance(band: Band, fullUse: boolean, twoEnds: boolean): number {
    if (!fullUse) { twoEnds = false; }

    const fullHalfUseMultiplier = fullUse ? 1 : this.halfUseMultiplier;
    const endsNumberMultiplier = twoEnds ? 1 : this.oneEndMultiplier;

    return band.weight * fullHalfUseMultiplier * endsNumberMultiplier;
  }
}
