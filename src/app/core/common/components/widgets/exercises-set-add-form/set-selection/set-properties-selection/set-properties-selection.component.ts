import { take } from 'rxjs/operators';
import { UserDataService } from '../../../../../services/user-data.service';
import { Exercise } from '../../../../../models/exercise.model';
import { BandUsed, ExerciseSetPart, Intensity } from '../../../../../models/training.models';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BandsSelectionModalComponent } from '../../../../modals/bands/bands-selection-modal/bands-selection-modal.component';

@Component({
  selector: 'app-set-properties-selection',
  templateUrl: './set-properties-selection.component.html',
  styleUrls: ['./set-properties-selection.component.scss'],
})
export class SetPropertiesSelectionComponent implements OnInit, OnChanges {

  /**
   *
   */
  @Input() public set exerciseSetter(exercise: Exercise) {
    this.exercise = exercise;
    if (this.setPartToBeEdited) { return; }
    this.buildForm(null);
  }

  /**
   * Boolean to indicate if there is rest between each exercise
   */
  @Input() public restBetweenExercises: boolean;

  /**
   * Set Part to be edited in the form
   */
  @Input() public set setPartToEdit(setPart: ExerciseSetPart) {
    if (!setPart) { return; }

    if (setPart?.exercise) {
      this.exercise = setPart.exercise;
    }

    if (setPart?.intensity?.band) {
      this.bandUsed = setPart.intensity.band;
    }

    this.buildForm(setPart);

    this.setPartToBeEdited = setPart;
  };

  /**
   * Set part outputed when selected
   */
  @Output() public setPart = new EventEmitter<ExerciseSetPart>();

  /**
   * Instance of the child component (BandsModal) to use its methods
   */
  @ViewChild(BandsSelectionModalComponent)
  bandsModal: BandsSelectionModalComponent;

  public exercise: Exercise;

  public setPartToBeEdited: ExerciseSetPart;

  /**
   * Band selected on band modal
   */
  public bandUsed: BandUsed;

  /**
   * Component's form
   */
  public setFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userStats: UserDataService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.restBetweenExercises && changes?.restBetweenExercises.currentValue !== changes?.restBetweenExercises.previousValue) {
      this.buildForm(this.setPartToBeEdited);
    }
  }

  ngOnInit() { }

  /**
   * Builds the component's form
   */
  buildForm(setPart: ExerciseSetPart): void {
    this.userStats.getWeight().pipe(take(1)).subscribe((weight: number) => {
      const values: FormValues = this.getFormValues(setPart, weight);
      this.setFormGroup = this.formBuilder.group({
        weight: [values.weight, Validators.compose([!this.exercise?.bodyWeight ? Validators.required : null, Validators.min(0)])],
        weightResistanceType: [{ value: values.weightResistanceType, disabled: this.exercise?.bodyWeight ? false : true }],
        bandWeight: [{ value: values.bandWeight, disabled: true }],
        bandResistanceType: [values.bandResistanceType],
        reps: [values.reps, Validators.compose([Validators.required, Validators.min(1)])],
        restSeconds: this.restBetweenExercises ? [values.restSeconds, Validators.compose([Validators.required, Validators.min(0)])] : null,
        restMinutes: this.restBetweenExercises ? [values.restMinutes, Validators.compose([Validators.required, Validators.min(0)])] : null,
      });
      this.changeDetector.detectChanges();
    });
  }

  /**
   * Gets the form initial values
   *
   * @param setPart object used to initialize form values
   * @returns form values
   */
  getFormValues(setPart: ExerciseSetPart, userWeight: number): FormValues {
    return new FormValues(setPart, userWeight);
  }

  /**
   * Opens band modal
   */
  onAddBandClicked(event: Event): void {
    this.bandsModal.openModal();
    event.stopPropagation();
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
    console.log('onSubmit')
    if (this.setFormGroup.invalid) {
      return;
    }

    const setPart: ExerciseSetPart = new ExerciseSetPart();
    setPart.exercise = this.exercise;
    setPart.quantity = form.reps;

    if (form?.restMinutes + form?.restSeconds !== 0) {
      setPart.rest = form.restMinutes * 60 + form.restSeconds;
    }

    setPart.intensity = new Intensity();

    if (this.bandUsed) {
      this.bandUsed.weight *= form.bandResistanceType === 'assistance' ? -1 : 1;
      setPart.intensity.band = this.bandUsed;
    }


    form.weight *= form.weightResistanceType === 'assistance' ? -1 : 1;

    this.userStats.getWeight().subscribe((weight) => {
      form.weight += this.exercise.bodyWeight ? weight : 0;
      setPart.intensity.weight = form.weight;

      this.setPart.emit(setPart);
    });
  }
}

class FormValues {
  weight: number;
  weightResistanceType: string;
  bandWeight: number;
  bandResistanceType: string;
  reps: number;
  restSeconds: number;
  restMinutes: number;

  constructor(setPart: ExerciseSetPart, userWeight: number) {
    this.setDefaultValues();

    if (setPart) {
      this.setSetPartValues(setPart, userWeight);
    }
  }

  setSetPartValues(setPart: ExerciseSetPart, userWeight: number) {
    if (setPart?.intensity?.weight) {
      let weight = setPart.intensity.weight;
      if (setPart.exercise.bodyWeight) {
        weight -= userWeight;
      }
      this.weight = Math.abs(weight);
      this.weightResistanceType = weight < 0 ? 'assistance' : 'ballast';
    }

    if (setPart?.intensity?.band) {
      this.bandWeight = Math.abs(setPart.intensity.band.weight);
      this.bandResistanceType = setPart.intensity.band.weight < 0 ? 'assistance' : 'ballast';
    }

    if (setPart?.quantity) {
      this.reps = setPart.quantity;
    }

    if (setPart?.rest) {
      const restSeconds = setPart.rest;
      this.restMinutes = Math.trunc(restSeconds / 60);
      this.restSeconds = restSeconds % 60;
    }
  }

  /**
   * Default form values
   */
  setDefaultValues() {
    this.setDefaultWeightValues();
    this.setDefaultRepsValue();
    this.setDefaultRestValues();
  }

  setDefaultWeightValues() {
    this.weightResistanceType = 'ballast';
    this.weight = 0;

    this.bandWeight = 0;
    this.bandResistanceType = 'assistance';
  }

  setDefaultRepsValue() {
    this.reps = 0;
  }

  setDefaultRestValues() {
    //TODO: custom default rest
    this.restSeconds = 30;
    this.restMinutes = 1;
  }
}
