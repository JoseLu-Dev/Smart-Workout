import { BandUsed } from '../../../../models/exercise-set.model';
import { BandsSelectionModalComponent } from '../../../../modals/bands/bands-selection-modal/bands-selection-modal.component';
import { Exercise } from '../../../../models/exercise.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExercisesSetsForm } from '../../exercises-set-add-form.interface';
import { CommonSetsForm } from './common-set-form.interface';

@Component({
  selector: 'app-common-exercise-strategy',
  templateUrl: './common-strategy.component.html',
  styleUrls: ['../exercises-set-add-form.component.scss'],
})
export class CommonExerciseStrategyComponent implements OnInit, ExercisesSetsForm, CommonSetsForm {

  @ViewChild(BandsSelectionModalComponent)
  bandsModal: BandsSelectionModalComponent;

  set: any;

  public multiExercise: boolean;
  public restBetweenExercises: boolean;

  public exerciseSelected: Exercise;

  setFormGroup: FormGroup;

  bandColor = '#453322';
  public bandUsed: BandUsed;

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.multiExercise = false;
    this.restBetweenExercises = true;
  }

  buildForm(): void {
    this.setFormGroup = this.formBuilder.group({
      weight: ['', !this.exerciseSelected.bodyWeight ? Validators.required : null],
      bandWeight: [{value: '', disabled: true}],
      reps: ['', Validators.required],
      restSeconds: [''],
      restMinutes: [''],
    });
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }

  getExerciseSelected(exercise: Exercise) {
    if (exercise) {
      this.exerciseSelected = exercise;
      this.buildForm();
    }
  }

  onAddBandClicked(){
    this.bandsModal.openModal();
  }

  getBandUsedFromModal(band: BandUsed){
    this.bandUsed = band;
    this.setFormGroup.get('bandWeight').setValue(this.bandUsed.weight);
  }

}
