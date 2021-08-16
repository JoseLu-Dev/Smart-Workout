import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userDataUrl = `${environment.backendUrl}/users/data`;
  private weightDataUrl = `${this.userDataUrl}/weight`;

  constructor(private http: HttpClient) { }

  getWeight(): Observable<number> {
    return this.http.get<number>(this.weightDataUrl);
  }

  setWeight(weight: number) {
    this.http.put(this.weightDataUrl, { weight: weight }).subscribe();
  }
}
