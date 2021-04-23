import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  private authUrl = `${environment.backendUrl}/auth`;
  private reSendEmailUrl = `${this.authUrl}/reSendVerificationEmail`;
  private verifyEmailUrl = `${this.authUrl}/verifyUser`;

  constructor(private http: HttpClient,) { }

  reSendVerificationEmail(email: string) {
    return this.http.post(`${this.reSendEmailUrl}`, email, {observe: 'response'});
  }

  sendConfirmationEmailCode(confirmationCode: string) {
    return this.http.post(`${this.verifyEmailUrl}`, {confirmationCode}, {observe: 'response'});
  }
}
