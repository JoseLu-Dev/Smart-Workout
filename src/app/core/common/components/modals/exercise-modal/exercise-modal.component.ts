import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, Input } from '@angular/core';
import { ExercisesService } from '../../../services/exercises.service';
import { ExerciseSpecs } from '../../../models/exercise.model';

@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss'],
})
export class ExerciseModalComponent implements OnInit {

  @Input() exercise;

  public title: string;

  public exerciseForm: FormGroup;

  /**
   * Modal id
   */
  id = `exercise-modal-${Math.random()}`;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private exercisesService: ExercisesService) { }

  ngOnInit() { this.buildForm(new ExerciseSpecs()); }

  buildForm(exercise: ExerciseSpecs) {
    this.exerciseForm = this.formBuilder.group({
      name: [exercise?.name || '', Validators.required],
      variations: this.formBuilder.array([]),
      progressions: this.formBuilder.array([]),
      muscleGroup: [exercise?.muscleGroup || '', Validators.required],
      bodyWeight: [exercise?.bodyWeight || false],
      static: [exercise?.static || false],
      id: [exercise?.id],
    });
    if (exercise) {
      if (exercise.progressions) {
        exercise?.progressions.forEach(progression => {
          (this.exerciseForm.get('progressions') as FormArray).push(this.formBuilder.control(progression));
        });
      }
      if (exercise.variations) {
        exercise?.variations.forEach(variations => {
          (this.exerciseForm.get('variations') as FormArray).push(this.formBuilder.control(variations));
        });
      }
    }
  }

  openModal(title: string, exercise: ExerciseSpecs) {
    this.title = title;
    this.buildForm(exercise);
    this.modalService.open(this.id);
  }

  onModalClosed() {}

  closeModal() {
    this.modalService.close(this.id);
  }

  onSubmit(exercise: ExerciseSpecs) {
    exercise.progressions = exercise.progressions.filter(progression => progression);
    exercise.variations = exercise.variations.filter(variation => variation);

    this.exercisesService.saveExercise(exercise);
    this.closeModal();
  }

  addVariation() {
    (this.exerciseForm.get('variations') as FormArray).push(this.formBuilder.control(null));
  }

  deleteVariation(index: number) {
    (this.exerciseForm.get('variations') as FormArray).removeAt(index);
  }

  getVariationsFormControls(): FormControl[] {
    return (this.exerciseForm.get('variations') as FormArray).controls as FormControl[];
  }

  addProgression() {
    (this.exerciseForm.get('progressions') as FormArray).push(this.formBuilder.control(null));
  }

  deleteProgression(index: number) {
    (this.exerciseForm.get('progressions') as FormArray).removeAt(index);
  }

  getProgressionFormControls(): FormControl[] {
    return (this.exerciseForm.get('progressions') as FormArray).controls as FormControl[];
  }
}
