import { Observable } from 'rxjs';
import { Muscle } from './../models/muscles.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusclesService {

  private musclesUrl = `${environment.backendUrl}/muscles`;

  constructor(private http: HttpClient) { }

  getMuscles(): Observable<Muscle[]> {
    return this.http.get<Muscle[]>(this.musclesUrl);
  }

  deleteMuscle(muscle: Muscle) {
    return this.http.delete(`${this.musclesUrl}/${muscle.id}`);
  }

  saveMuscle(muscle: Muscle) {
    return this.http.post<Muscle>(this.musclesUrl, muscle);
  }
}
