import { Exercise } from './../../models/exercise.model';
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
      selectedType: ['', Validators.required]
    });
    this.exercisesSetFormGroup.setValue({selectedType: this.types[0]});
  }

  getExerciseSelected(exercise: Exercise){
    console.log(exercise);
  }

}
