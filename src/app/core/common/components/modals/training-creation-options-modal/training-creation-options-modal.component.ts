import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalBaseComponent } from '../base-modal';

@Component({
  selector: 'app-training-creation-options-modal',
  templateUrl: './training-creation-options-modal.component.html',
  styleUrls: ['./training-creation-options-modal.component.scss'],
})
export class TrainingCreationOptionsModalComponent extends ModalBaseComponent implements OnInit {

  @Output() optionSelected= new EventEmitter<TrainingCreationOptions>();

  constructor(
    private modalService: ModalService,
    private changeDetector: ChangeDetectorRef,) {
    super(modalService, changeDetector);
    this.id = `TrainingCreationOptionsModalComponent-${Math.random()}`;
  }

  ngOnInit() { }

  onModalClosed(): void {}

  existing(){
    this.optionSelected.emit(TrainingCreationOptions.existing);
    this.closeModal();
  }

  new(){
    this.optionSelected.emit(TrainingCreationOptions.new);
    this.closeModal();
  }

  onModalOpened(): void {}
}

export enum TrainingCreationOptions{
  new = 'new',
  existing = 'existing'
}
