import { Exercise } from './../../../models/exercise.model';
import { BandUsed } from './../../../models/exercise-set.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandsSelectionModalComponent } from '../../../modals/bands/bands-selection-modal/bands-selection-modal.component';

@Component({
  selector: 'app-set-properties-selection',
  templateUrl: './set-properties-selection.component.html',
  styleUrls: ['./set-properties-selection.component.scss'],
})
export class SetPropertiesSelectionComponent implements OnInit {

  @Input() public bodyWeightExercise: boolean;

  @Input() public restBetweenExercises: boolean;

  @ViewChild(BandsSelectionModalComponent)
  bandsModal: BandsSelectionModalComponent;

  public bandUsed: BandUsed;

  public setFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.setFormGroup = this.formBuilder.group({
      weight: ['', !this.bodyWeightExercise ? Validators.required : null],
      bandWeight: [{value: '', disabled: true}],
      reps: ['', Validators.required],
      restSeconds: [''],
      restMinutes: [''],
    });
  }

  onAddBandClicked(){
    this.bandsModal.openModal();
  }

  getBandUsedFromModal(band: BandUsed){
    this.bandUsed = band;
    this.setFormGroup.get('bandWeight').setValue(this.bandUsed.weight);
  }
}
