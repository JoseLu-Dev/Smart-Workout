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
  /**
   * Redirect to "/home" if the user is logged in
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.user.subscribe(user => {
      if (user) {
        this.router.navigate(['/app'], { replaceUrl: true });
      }
    });
  }

  ngOnInit(): void {
    this.invalidCredentials = false;
    this.signInFormGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSignIn(credentials: { name: string; password: string }) {
    this.authService.login(credentials).subscribe(res => {
      if (!res) { this.invalidCredentials = true; }
    });
  }
}


