import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ExerciseSetPart } from '../../../../models/training.models';
import { Exercise } from '../../../../models/exercise.model';

@Component({
  selector: 'app-set-selection',
  templateUrl: './set-selection.component.html',
  styleUrls: ['./set-selection.component.scss'],
})
export class SetSelectionComponent implements OnInit {

  /**
   * SetPart to be outputed when confirmed
   */
  @Output() setPart = new EventEmitter<ExerciseSetPart>();

  /**
   * Input when set part is already created
   */
  @Input() setPartToEdit: ExerciseSetPart;

  /**
   * Boolean that indicates wether if the strategy accepts
   * to add rest between setParts or not
   */
  @Input() restBetweenExercises: boolean;

  /**
   * Current exercise selected to pass it to properties component
   * and is used to determine if properties component can be shown
   */
  public exerciseSelected: Exercise;

  constructor() { }

  ngOnInit() { }

  /**
   * ExerciseSelected setter
   *
   * @param exercise exercise to be set
   */
  setExerciseSelected(exercise: Exercise): void {
    this.exerciseSelected = exercise;
  }

  /**
   * Pass the data to the parent component
   *
   * @param setPart setPart
   */
  addSetPart(setPart: ExerciseSetPart): void {
    this.setPart.emit(setPart);
  }
}
