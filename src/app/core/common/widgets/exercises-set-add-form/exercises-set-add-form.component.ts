import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercises-set-add-form',
  templateUrl: './exercises-set-add-form.component.html',
  styleUrls: ['./exercises-set-add-form.component.scss'],
})
export class ExercisesSetAddFormComponent implements OnInit {

  public types = ['normal', 'emom'];

  public exercisesSetFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,) {}

  ngOnInit() {
    this.exercisesSetFormGroup = this.formBuilder.group({
      selectedType: [this.types[0], Validators.required]
    });
  }

}
