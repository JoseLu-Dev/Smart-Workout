import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../common/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  invalidCredentials = false;
  signUpForm: FormGroup;

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(7), Validators.required])]
    });
  }

  onSignUp(credentials: { name: string; password: string; email: string }) {
    this.authService.register(credentials).subscribe(res => {
      const status: number = res['status'];
      switch (status) {
        case 201:
          this.alertCtrl.create({
            header: 'User created',
            message: 'Please go to your email and verify it.',
            buttons: ['OK']
          }).then(alert => alert.present());
          break;
      }
    }, error => {
      const errorStatus: number = error['status'];
      switch (errorStatus) {
        case 409:
          this.invalidCredentials = true;
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

  goBack() {
    this.location.back();
  }
}
