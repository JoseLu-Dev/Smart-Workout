import { take } from 'rxjs/operators';
import { TrainingsComponentCommunicationService } from '../../services/trainings-component-communication.service';
import { ExerciseSet } from '../../models/training.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-set-add-form',
  templateUrl: './exercises-set-add-form.component.html',
  styleUrls: ['./exercises-set-add-form.component.scss'],
})
export class ExercisesSetAddFormComponent implements OnInit {

  public types = ['Normal', 'Emom', 'Super Set', 'Circuit'];

  public exercisesSetFormGroup: FormGroup;

  public set: ExerciseSet;

  constructor(
    private formBuilder: FormBuilder,
    private trainingsFormService: TrainingsComponentCommunicationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.exercisesSetFormGroup = this.formBuilder.group({
      selectedType: [this.types[0], Validators.required]
    });
    this.setOnSelectedSetChanged();
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
      this.router.navigate([`app/trainings/${training.id}`], { replaceUrl: true });
    });
  }

}
