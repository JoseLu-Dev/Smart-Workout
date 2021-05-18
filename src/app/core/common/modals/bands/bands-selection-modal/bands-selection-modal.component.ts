import { BandsService } from './../bands.service';
import { Band, BandUsed } from '../../../models/exercise-set.model';
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

  /**
   * Modal id
   */
  id = 'bands-selection-modal';

  /**
   * Bands to be showed in the modal
   */
  public bands: Band[];

  constructor(
    private modalService: ModalService,
    private bandsService: BandsService,
    ) { }

  ngOnInit() {
    this.getBands()
  }

  /**
   * Gets the bands to show in the dialog using the 'BandsService'
   */
  getBands(){
    this.bands = this.bandsService.getUserBands();
  }

  onBandClicked(band: Band){
    console.log(band);
    //TODO: create form when band is selected
  }

  /**
   * Opens new band modal
   * (not yet implemented)
   */
  onAddNewBandClicked(){

  }

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
