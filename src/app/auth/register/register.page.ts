import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signUpForm: FormGroup;

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private authService: AuthService,
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
      console.log(res);
    });
  }

  goBack() {
    this.location.back();
  }
}
