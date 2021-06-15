import { BandsCreationModalComponent } from './../bands-creation-modal/bands-creation-modal.component';
import { BandsService } from './../bands.service';
import { Band, BandUsed } from '../../../models/exercise-set.model';
import { ModalService } from '../../../../../common/modals/base-modal/modal.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bands-selection-modal',
  templateUrl: './bands-selection-modal.component.html',
  styleUrls: ['./bands-selection-modal.component.scss'],
})
export class BandsSelectionModalComponent implements OnInit {

  @ViewChild(BandsCreationModalComponent)
  bandModal: BandsCreationModalComponent;

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
  getBands() {
    this.bandsService.getUserBands().subscribe(bands => {
      this.bands = bands;
    });
  }

  onBandClicked(band: Band) {
    this.band = band;

    this.bandForm = this.formBuilder.group({
      weight: [band.weight, Validators.compose([Validators.required, Validators.max(band.weight), Validators.min(0)])],
      use: ['full'],
      ends: ['two'],
    });
  }

  /**
   * Opens new band modal
   * (not yet implemented)
   */
  onAddNewBandClicked(): void {
    this.bandModal.openModal();
  }

  /**
   * Creates and outputs the band selected with the form properties
   */
  onSubmit(): void {
    const bandSelected = new BandUsed();
    bandSelected.color = this.band.color;
    this.calculateBandResistance(bandSelected);

    this.bandSelected.emit(bandSelected);

    this.closeModal();
  }

  /**
   * Sets the weight of the band to the value in the form if the weight is the same
   * as the one of the band, else it lets the BandService to calculate it depending
   * on the two questions asked in the form (radio buttons)
   *
   * @param bandSelected band selected to put data calculated on it
   */
  calculateBandResistance(bandSelected: BandUsed): void {
    if (this.bandForm.get('weight').value !== this.band.weight) {
      bandSelected.weight = this.bandForm.get('weight').value;
    } else {
      const bandFullUse = this.bandForm.get('use').value === 'full' ? true : false;
      const bandTwoEnds = this.bandForm.get('ends').value === 'two' ? true : false;
      bandSelected.weight = this.bandsService.getBandResistance(
        this.band,
        bandFullUse,
        bandTwoEnds
      );
      bandSelected.fullUse = bandFullUse;
      bandSelected.twoEnds = bandTwoEnds;
    }
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
    this.onModalClosed();
    this.modalService.close(this.id);
  }

  /**
   * Resets the form when the modal is closed
   */
  onModalClosed() {
    this.bandForm = null;
  }

  addBandCreated(band: Band) {
    this.bands.push(band);
  }
}
