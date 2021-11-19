import { Location } from '@angular/common';
import { take } from 'rxjs/operators';
import { TrainingsComponentCommunicationService } from '../../../services/trainings-component-communication.service';
import { ExerciseSet } from '../../../models/training.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-set-add-form',
  templateUrl: './exercises-set-add-form.component.html',
  styleUrls: ['./exercises-set-add-form.component.scss'],
})
export class ExercisesSetAddFormComponent implements OnInit, OnDestroy{

  public types = ['Normal', 'Emom', 'Super Set', 'Circuit'];

  public exercisesSetFormGroup: FormGroup;

  public set: ExerciseSet;

  constructor(
    private formBuilder: FormBuilder,
    private trainingsFormService: TrainingsComponentCommunicationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.exercisesSetFormGroup = this.formBuilder.group({
      selectedType: [this.types[0], Validators.required]
    });
    this.setOnSelectedSetChanged();
  }

  ngOnDestroy() {
    this.trainingsFormService.resetSelectedSet();
    this.trainingsFormService.saveTraining();
  }

  public setOnSelectedSetChanged() {
    this.trainingsFormService.getSelectedSet().subscribe(set => {
      if (!set) { return; };
      const copiedSet: ExerciseSet = JSON.parse(JSON.stringify(set));
      const setParts = copiedSet.setParts;
      copiedSet.setParts = setParts.splice(0, setParts.length / copiedSet.setsCount);
      this.exercisesSetFormGroup.get('selectedType').setValue(copiedSet.type);
      this.set = copiedSet;
    });
  }

  public sendSetToList(set: ExerciseSet) {

    set.type = this.exercisesSetFormGroup.get('selectedType').value;

    this.trainingsFormService.confirmSetSelectedEdition(set);

    this.set = new ExerciseSet();

    this.exercisesSetFormGroup.reset();
  }

  public submitEdition() {
    this.trainingsFormService.saveTraining();

    this.trainingsFormService.getTraining().pipe(take(1)).subscribe(training => {
      this.location.back();
    });
  }

}
