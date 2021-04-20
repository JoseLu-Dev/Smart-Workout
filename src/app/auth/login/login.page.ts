
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit{

  signInFormGroup: FormGroup;
  invalidCredentials: boolean;

  constructor(private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.invalidCredentials = false;
    this.signInFormGroup = this.formBuilder.group({
      email: [],
      password: []
      });
  }

  onSignIn(user){
    console.log(user);
  }

}
