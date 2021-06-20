import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ExerciseListElement } from './../../models/exercise.model';
import { ModalService } from './../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalBaseComponent } from '../base-modal';
import { ExercisesService } from '../../services/exercises.service';

@Component({
  selector: 'app-exercise-search-modal',
  templateUrl: './exercise-search-modal.component.html',
  styleUrls: ['./exercise-search-modal.component.scss'],
})
export class ExerciseSearchModalComponent extends ModalBaseComponent implements OnInit {

  @Output() exerciseSelected = new EventEmitter<ExerciseListElement>();

  id = `exercise-search-modal-${Math.random()}`;

  public exerciseName = new FormControl();

  public exerciseList: ExerciseListElement[];

  constructor(
    private modalService: ModalService,
    private exercisesService: ExercisesService) {
    super(modalService);
  }

  ngOnInit() {
  }

  onSearchChanges(){
    this.exercisesService.getExercisesByName(this.exerciseName.value).pipe(take(1)).subscribe((exercises) => {
      this.exerciseList = exercises;
    });
  }

  onExerciseClicked(exercise: ExerciseListElement){
    this.exerciseSelected.next(exercise);
    this.closeModal();
  }

  onModalClosed(): void {
    this.exerciseList = null;
  }

}
