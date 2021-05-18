import { BandsService } from './../bands.service';
import { Band, BandUsed } from '../../../models/exercise-set.model';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
   * Band selected to be compared on form submitted
   */
  public band: Band;

  /**
   * Bands to be showed in the modal
   */
  public bands: Band[];

  /**
   * Band form
   */
  public bandForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private bandsService: BandsService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.getBands();
  }

  /**
   * Gets the bands to show in the dialog using the 'BandsService'
   */
  getBands(){
    this.bands = this.bandsService.getUserBands();
  }

  onBandClicked(band: Band){
    this.band = band;

    this.bandForm = this.formBuilder.group({
      weight: [band.weight, Validators.compose([Validators.required, Validators.max(band.weight), Validators.min(0)])],
      use:[],
      ends: [],
    });
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
