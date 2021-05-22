import { Exercise } from './../../../models/exercise.model';
import { BandUsed, ExerciseSetPart, Intensity } from './../../../models/exercise-set.model';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandsSelectionModalComponent } from '../../../modals/bands/bands-selection-modal/bands-selection-modal.component';

@Component({
  selector: 'app-set-properties-selection',
  templateUrl: './set-properties-selection.component.html',
  styleUrls: ['./set-properties-selection.component.scss'],
})
export class SetPropertiesSelectionComponent implements OnInit {

  /**
   *
   */
  @Input() public exercise: Exercise;

  /**
   * Boolean to
   */
  @Input() public restBetweenExercises: boolean;

  /**
   * Boolean to
   */
  @Input() public setPartToEdit: ExerciseSetPart;

  /**
   * Set part outputed when selected
   */
  @Output() public setPart = new EventEmitter<ExerciseSetPart>();

  /**
   * Instance of the child component (BandsModal) to use its methods
   */
  @ViewChild(BandsSelectionModalComponent)
  bandsModal: BandsSelectionModalComponent;

  /**
   * Band selected on band modal
   */
  public bandUsed: BandUsed;

  /**
   * Component's form
   */
  public setFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Builds the component's form
   */
  buildForm(): void {
    this.setFormGroup = this.formBuilder.group({
      weight: ['', Validators.compose([!this.exercise.bodyWeight ? Validators.required : null, Validators.min(0)])],
      weightResistanceType: ['ballast'],
      bandWeight: [{ value: '', disabled: true }],
      bandResistanceType: ['assistance'],
      reps: ['', Validators.required],
      restSeconds: this.restBetweenExercises ? [30, Validators.compose([Validators.required, Validators.min(0)])] : null,
      restMinutes: this.restBetweenExercises ? [1, Validators.compose([Validators.required, Validators.min(0)])] : null,
    });
    //TODO: disable assistance weight when exercise is not bodyweight
  }

  /**
   * Opens band modal
   */
  onAddBandClicked() {
    this.bandsModal.openModal();
  }

  /**
   * Gets the band selected in band modal
   *
   * @param band band outputed from the band modal
   */
  getBandUsedFromModal(band: BandUsed) {
    this.bandUsed = band;
    this.setFormGroup.get('bandWeight').setValue(this.bandUsed.weight);
  }

  /**
   * Builds the ExerciseSetPart object and outputs it to the parent
   *
   * @param form form data
   */
  onSubmit(form: {
    weight: number; weightResistanceType: string;
    bandWeight: number; bandResistanceType: string;
    reps: number; restSeconds: number; restMinutes: number;
  }) {
    if (this.setFormGroup.invalid) {
      return;
    }

    const setPart: ExerciseSetPart = new ExerciseSetPart();
    setPart.exercise = this.exercise;
    setPart.quantity = form.reps;

    if (form?.restMinutes && form?.restSeconds) {
      setPart.rest = form.restMinutes * 60 + form.restSeconds;
    }

    setPart.intensity = new Intensity();

    if (this.bandUsed) {
      this.bandUsed.weight *= form.bandResistanceType === 'assistance' ? -1 : 1;
      setPart.intensity.band = this.bandUsed;
    }

    form.weight *= form.weightResistanceType === 'assistance' ? -1 : 1;
    setPart.intensity.weight = form.weight;

    this.setPart.emit(setPart);
  }
}
