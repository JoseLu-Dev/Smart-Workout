import { BandUsed } from '../../../models/exercise-set.model';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bands-selection-modal',
  templateUrl: './bands-selection-modal.component.html',
  styleUrls: ['./bands-selection-modal.component.scss'],
})
export class BandsSelectionModalComponent implements OnInit {

  /**
   * Band to output when it is selected and modal is submitted
   */
  @Output() bandSelected = new EventEmitter<BandUsed>();

  id = 'bands-selection-modal';

  constructor(private modalService: ModalService) { }

  ngOnInit() { }

  /**
   * Creates and outputs the band selected with the form properties
   */
  onSubmit(): void{
    const bandSelected = new BandUsed();
    this.bandSelected.emit(bandSelected);
  }

  /**
   * Uses Modal Service to open a Modal Window (content in html template)
   * using the id provided in params
   */
  openModal() {
    this.modalService.open(this.id);
  }

  /**
   * Uses Modal Service to close a Modal Window (content in html template)
   * using the id provided in params
   */
  closeModal() {
    this.modalService.close(this.id);
  }
}
