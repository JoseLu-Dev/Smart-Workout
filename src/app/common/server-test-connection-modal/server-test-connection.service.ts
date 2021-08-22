import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerTestConnectionService {

  private serverUrl = `${environment.backendUrl}/auth`;

  constructor(private http: HttpClient) { }

  testConnection(){
    return this.http.get(this.serverUrl, {responseType: 'text'});
  }
}
