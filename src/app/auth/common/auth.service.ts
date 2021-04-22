import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  private authUrl = `${environment.backendUrl}/auth`;
  private loginUrl = '/login';
  private registerUrl = '/register';

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router) {
    this.storage.create();
    this.loadStoredToken();
  }

  loadStoredToken() {
    const platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => from(this.storage.get(TOKEN_KEY))),
      map(token => {
        if (token) {
          const decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  login(credentials: { name: string; password: string }) {
    console.log(`${this.authUrl}${this.loginUrl}`);
    return this.http.post(`${this.authUrl}${this.loginUrl}`, credentials).pipe(
      map(res =>
        res = res['token']
      ),
      switchMap(token => {
        console.log(token);
        const decoded = helper.decodeToken(token);
        this.userData.next(decoded);

        const storageObs = from(this.storage.set(TOKEN_KEY, token));
        return storageObs;
      })
    );
  }

  register(credentials: { name: string; password: string; email: string }) {
    return this.http.post(`${this.authUrl}${this.registerUrl}`, credentials, {observe: 'response'});
  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
  }

}
