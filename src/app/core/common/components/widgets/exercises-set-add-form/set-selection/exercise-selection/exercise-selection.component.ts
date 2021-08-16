import { ExerciseModalComponent } from '../../../../modals/exercise-modal/exercise-modal.component';
import { ExerciseListElement } from '../../../../../models/exercise.model';
import { ExercisesService } from '../../../../../services/exercises.service';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Exercise, ExerciseSpecs } from '../../../../../models/exercise.model';
import { Observable } from 'rxjs';
import { ExerciseSearchModalComponent } from 'src/app/core/common/components/modals/exercise-search-modal/exercise-search-modal.component';

@Component({
  selector: 'app-exercise-selection',
  templateUrl: './exercise-selection.component.html',
  styleUrls: ['./exercise-selection.component.scss'],
})
export class ExerciseSelectionComponent implements OnInit {

  @ViewChild(ExerciseSearchModalComponent)
  exerciseSearchModal: ExerciseSearchModalComponent;

  /**
   * Exercise object outputed when the form is valid
   */
  @Output() exerciseSelected = new EventEmitter<Exercise>();

  /**
   * Exercise received when form is going to be edited
   */
  @Input() set exercise(exercise: Exercise) {
    if (exercise) {
      this.exerciseSelectedElement = new ExerciseListElement();
      this.exerciseSelectedElement.id = exercise.specsId;
      this.exerciseSelectedElement.name = exercise.name;

      this.exerciseSelectedName = exercise.name;
      this.exerciseSelectedProgression = exercise.progression;
      this.exerciseSelectedVariation = exercise.variation;

      this.getExerciseFromAPI(exercise.specsId);
    }
  }

  @ViewChild(ExerciseModalComponent)
  exerciseModal: ExerciseModalComponent;

  /**
   * Exercise specs of the one selected in the ng-select field
   */
  public exerciseSelectedSpecs: ExerciseSpecs;

  public exerciseSelectedElement: ExerciseListElement;
  public exerciseSelectedName: string;
  public exerciseSelectedProgression: string;
  public exerciseSelectedVariation: string;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() { }

  onSelectExerciseClicked() {
    this.exerciseSearchModal.openModal();
  }

  onExerciseSelected(exercise: ExerciseListElement) {
    this.exerciseSelectedElement = exercise;
    this.onExerciseNameSelectedChange(exercise);
  }

  /**
   * Calls the api to get exercise specs
   *
   * @param exercise exercise received from select field
   */
  onExerciseNameSelectedChange(exercise: ExerciseListElement) {
    this.resetFormValues();

    if (exercise) { this.getExerciseFromAPI(exercise.id); }
  }

  /**
   * Called when exerciseSelectedProgression is changed in select field
   *
   * @param progression
   */
  onProgressionChange(progression: string) {
    this.exerciseSelectedProgression = progression;

    this.validateForm();
  }

  /**
   * Called when exerciseSelectedVariation is changed in select field
   *
   * @param variation
   */
  onVariationChange(variation: string) {
    this.exerciseSelectedVariation = variation;

    this.validateForm();
  }


  /**
   * Sets form 'validators' for 'progressions' and 'variations' depending on if the exercise selected has them
   */
  formIsValid(): boolean {
    const progressionRequired = this.exerciseSelectedSpecs?.progressions.length > 0;
    const progressionValid = !progressionRequired || (this.exerciseSelectedProgression != null);

    const variationRequired = this.exerciseSelectedSpecs?.variations.length > 0;
    const variationValid = !variationRequired || (this.exerciseSelectedVariation != null);

    return progressionValid && variationValid;
  }

  /**
   * Resets form 'progression' and 'variation' fields to null
   */
  resetFormValues() {
    this.exerciseSelectedProgression = null;
    this.exerciseSelectedVariation = null;
  }

  /**
   * Checks if form is valid and executes o
   */
  validateForm() {
    if (this.formIsValid()) {
      this.onValidForm();
    } else {
      this.onInvalidForm();
    }
  }

  /**
   * Outputs the exercise to parent component
   */
  onValidForm() {
    this.exerciseSelected.emit(this.getExerciseFormObject());
  }

  /**
   * Outputs the exercise with null value to parent component
   */
  onInvalidForm() {
    this.exerciseSelected.emit(null);
  }

  /**
   * Creates an Exercise object with the form data
   *
   * @returns Exercise object
   */
  getExerciseFormObject(): Exercise {
    const exercise = new Exercise();
    exercise.name = this.exerciseSelectedSpecs.name;
    exercise.progression = this.exerciseSelectedProgression;
    exercise.variation = this.exerciseSelectedVariation;
    exercise.bodyWeight = this.exerciseSelectedSpecs.bodyWeight;
    exercise.static = this.exerciseSelectedSpecs.static;
    exercise.muscleGroup = this.exerciseSelectedSpecs.muscleGroup;
    exercise.specsId = this.exerciseSelectedSpecs.id;

    return exercise;
  }

  /**
   * Gets an exercise data from the API given a name
   *
   * @param id exercise name
   * @param callback function to execute when the api call has been done
   */
  getExerciseFromAPI(id: string) {
    if (!id) {
      return;
    }

    this.exercisesService.getExerciseSpecs(id).subscribe(exercise => {
      this.exerciseSelectedSpecs = exercise;

      this.validateForm();

    });
  }

  onAddNewExerciseClicked() {
    this.exerciseModal.openModal('creation', null);
  }

  onEditExerciseClicked() {
    this.exerciseModal.openModal('edition', this.exerciseSelectedSpecs);
  }

}
