import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { EmailVerificationService } from './email-verification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {

  invalidEmail = false;
  emailVerified = false;
  emailForm: FormGroup;
  verificationCode: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private emailVerificationService: EmailVerificationService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.verificationCode = this.route.snapshot.paramMap.get('code');
    if (this.verificationCode) {
      this.emailVerificationService.sendConfirmationEmailCode(this.verificationCode).subscribe(res => {
        const status: number = res['status'];
        switch (status) {
          case 200:
            this.emailVerified = true;
            this.alertCtrl.create({
              header: 'Successfully verified',
              message: 'Email has been successfully verified.',
              buttons: ['OK']
            }).then(alert => alert.present());
            break;
        }
      }, error => {
        const errorStatus: number = error['status'];
        switch (errorStatus) {
          case 404:
            this.invalidEmail = true;
            this.alertCtrl.create({
              header: 'Not suitable',
              message: 'This account is not suitable for activation.',
              buttons: ['OK']
            }).then(alert => alert.present());
            break;
          case 500:
            this.alertCtrl.create({
              header: 'Server error',
              message: 'An error has occurred, try again later.',
              buttons: ['OK']
            }).then(alert => alert.present());
        }
      });
    }
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
    });
  }

  onResendEmailCLicked(email: string) {
    this.emailVerificationService.reSendVerificationEmail(email).subscribe(res => {
      const status: number = res['status'];
      switch (status) {
        case 200:
          this.alertCtrl.create({
            header: 'Email resend',
            message: 'Email has been resend, please look for it.',
            buttons: ['OK']
          }).then(alert => alert.present());
          break;
      }
    }, error => {
      const errorStatus: number = error['status'];
      switch (errorStatus) {
        case 400:
          this.alertCtrl.create({
            header: 'Verified',
            message: 'This email has been already verified.',
            buttons: ['OK']
          }).then(alert => alert.present());
          break;
        case 404:
          this.alertCtrl.create({
            header: 'No email found',
            message: 'There is no user with this email.',
            buttons: ['OK']
          }).then(alert => alert.present());
          break;
        case 500:
          this.alertCtrl.create({
            header: 'Server error',
            message: 'An error has occurred, try again later.',
            buttons: ['OK']
          }).then(alert => alert.present());
      }
    });
  }

  onGoToLoginClicked(){
    this.router.navigate([''], { replaceUrl: true });
  }
}
