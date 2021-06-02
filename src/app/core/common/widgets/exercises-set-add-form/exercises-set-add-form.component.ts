import { TrainingsService } from './../../services/trainings.service';
import { ExerciseSet } from './../../models/exercise-set.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercises-set-add-form',
  templateUrl: './exercises-set-add-form.component.html',
  styleUrls: ['./exercises-set-add-form.component.scss'],
})
export class ExercisesSetAddFormComponent implements OnInit {

  public types = ['Normal', 'Emom', 'Super Set', 'Circuit'];

  public exercisesSetFormGroup: FormGroup;

  public set: ExerciseSet = new ExerciseSet();

  constructor(
    private formBuilder: FormBuilder,
    private trainingsService: TrainingsService
    ) {}

  ngOnInit() {
    this.exercisesSetFormGroup = this.formBuilder.group({
      selectedType: [this.types[0], Validators.required]
    });
  }

  public sendSetToList(set: ExerciseSet){
    set.type = this.exercisesSetFormGroup.get('selectedType').value;

    this.trainingsService.confirmSetSelectedEdition(set);

    this.set = null;
    this.exercisesSetFormGroup.reset();
  }

}
