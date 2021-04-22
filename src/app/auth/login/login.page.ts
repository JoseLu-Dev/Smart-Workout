import { AuthService } from '../common/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  signInFormGroup: FormGroup;
  invalidCredentials: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.invalidCredentials = false;
    this.signInFormGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSignIn(credentials: { name: string; password: string }) {
    console.log(credentials);
    this.authService.login(credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/home');
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}


