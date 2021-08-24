import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private usersUrl = `${environment.backendUrl}/users`;
  private userDataUrl = `${environment.backendUrl}/users/data`;
  private weightDataUrl = `${this.userDataUrl}/weight`;

  constructor(
    private http: HttpClient,) { }

  getWeight(): Observable<number> {
    return this.http.get<number>(this.weightDataUrl);
  }

  setWeight(weight: number) {
    this.http.put(this.weightDataUrl, { weight: weight }).subscribe();
  }

  getUserData() {
    return this.http.get(`${this.usersUrl}`);
  }
}
