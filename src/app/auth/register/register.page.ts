import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signUpForm: FormGroup;

  constructor(private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(7), Validators.required])]
    });
  }

  onSignUp(user) {
    console.log(user);
  }

  goBack() {
    this.location.back();
  }
}
