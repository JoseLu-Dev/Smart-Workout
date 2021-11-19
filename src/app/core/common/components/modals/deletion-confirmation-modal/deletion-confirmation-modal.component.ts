import { ModalService } from './../../../../../common/modals/base-modal/modal.service';
import { ModalBaseComponent } from 'src/app/core/common/components/modals/base-modal';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-deletion-confirmation-modal',
  templateUrl: './deletion-confirmation-modal.component.html',
  styleUrls: ['./deletion-confirmation-modal.component.scss'],
})
export class DeletionConfirmationModalComponent extends ModalBaseComponent implements OnInit {

  id = `deletion-confirmation-modal-${Math.random()}`;

  itemToDelete: any;

  onDeleteConfirmationCallback: () => void;

  constructor(
    private modalService: ModalService,
    private changeDetector: ChangeDetectorRef) {
    super(modalService, changeDetector);
  }

  ngOnInit() { }

  onModalClosed(): void { }

  onModalOpened(): void { }

  setItemToDelete(item: any, onDeleteConfirmationCallback: () => void): void {
    this.openModal();
    // eslint-disable-next-line no-underscore-dangle
    this.itemToDelete = item;
    this.onDeleteConfirmationCallback = onDeleteConfirmationCallback;
  }

  onDeleteClicked(): void {
    this.onDeleteConfirmationCallback();
    this.closeModal();
  }
}
