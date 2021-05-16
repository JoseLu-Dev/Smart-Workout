import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExercisesSetsForm } from '../exercises-set-add-form.interface';
import { CommonSetsForm } from './common-set-form.interface';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent implements OnInit, ExercisesSetsForm, CommonSetsForm {

  set: any;

  public multiExercise: boolean;
  public restBetweenExercises: boolean;
  public bodyWeighted: boolean;

  setFormGroup: FormGroup;

  bandColor = '#453322';

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
    this.buildForm();
  }

  buildForm(): void {
    this.setFormGroup = this.formBuilder.group({
      weight: ['', !this.bodyWeighted ? Validators.required : null],
      reps: ['', Validators.required],
      restSeconds: [''],
      restMinutes: ['']
    });
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

}
