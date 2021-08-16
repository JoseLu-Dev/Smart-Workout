import { ModalService } from './../../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalBaseComponent } from '../base-modal';
import { TrainingSpecs } from '../../../models/trainings-day.model';

@Component({
  selector: 'app-training-selection-modal',
  templateUrl: './training-selection-modal.component.html',
  styleUrls: ['./training-selection-modal.component.scss'],
})
export class TrainingSelectionModalComponent extends ModalBaseComponent implements OnInit {

  @Output() trainingSelected = new EventEmitter<TrainingSpecs>();

  constructor(private modalService: ModalService) {
    super(modalService);
    this.id = `TrainingSelectionModalComponent-${Math.random()}`;
  }

  ngOnInit() { }

  onModalClosed(): void {

  }
  onModalOpened(): void {

  }

  onTrainingSelected(training: TrainingSpecs): void {
    this.trainingSelected.next(training);
    this.closeModal();
  }
}
