import { TrainingsComponentCommunicationService } from '../../../services/trainings-component-communication.service';
import { Training } from '../../../models/training.models';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../../../services/trainings.service';
import { TrainingSpecs } from '../../../models/trainings-day.model';
import { DragulaService } from 'ng2-dragula';
import { DeletionConfirmationModalComponent } from '../../modals/deletion-confirmation-modal/deletion-confirmation-modal.component';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit, AfterViewChecked {

  @ViewChild(DeletionConfirmationModalComponent)
  deletionConfirmationModalComponent: DeletionConfirmationModalComponent;

  @Input() editing: boolean;

  @Output() trainingSpecs = new EventEmitter<TrainingSpecs>();

  public training: Training;

  private setsNumber: number;

  constructor(
    private trainingsService: TrainingsComponentCommunicationService,
    private route: ActivatedRoute,
    private trainingsServiceApi: TrainingsService,
    private dragulaService: DragulaService,) {
    dragulaService.destroy('SETS');
    dragulaService.createGroup('SETS', {
      moves: (el, container, handle) =>
        handle.id === 'dragger' ||
        handle.parentElement.id === 'dragger' ||
        handle.parentElement.parentElement.id === 'dragger'
    });
  }

  ngAfterViewChecked(): void {
    if (this.training && this.setsNumber !== this.training?.setsDone.length) {
      this.preventPageScrollOnElementDrag();
      this.setsNumber = this.training.setsDone.length;
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsService.getTrainingFromAPI(id);

    this.trainingsService.getTraining().subscribe(training => {
      if (!training) { return; }

      this.training = training;
      this.preventPageScrollOnElementDrag();

      this.trainingsServiceApi.getTrainingSpecs(training.id).subscribe(trainingSpecs => {
        this.trainingSpecs.next(trainingSpecs);
      });
    });
  }

  onEditSetClicked(index: number) {
    this.trainingsService.setExerciseSetToEdit(index);

    setTimeout(() => {
      document.querySelector('#editForm').scrollIntoView({ behavior: 'smooth'});
    }, 0);
  }

  onDeleteSetClicked(index: number) {
    this.deletionConfirmationModalComponent.setItemToDelete(this.training.setsDone[index], () => {
      this.deleteSet(index);
    });
  }

  deleteSet(index: number) {
    this.trainingsService.deleteExerciseSet(index);
  }

  preventPageScrollOnElementDrag() {
    const moveList = document.querySelectorAll('#dragger');

    if (moveList) {
      moveList.forEach(move => {
        move.addEventListener('touchmove', event => event.preventDefault());
      });
    }
  }

}
