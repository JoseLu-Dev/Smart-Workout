import { BandsService } from '../bands.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ModalService } from '../../../../../../common/modals/base-modal/modal.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Band } from '../../../../models/training.models';

@Component({
  selector: 'app-bands-creation-modal',
  templateUrl: './bands-creation-modal.component.html',
  styleUrls: ['./bands-creation-modal.component.scss'],
})
export class BandsCreationModalComponent implements OnInit {

  @Output() band = new EventEmitter<Band>();

  id = 'bands-creation-modal';

  /**
   * Band form
   */
  public bandForm: FormGroup;

  public colorForm: FormControl;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private bandsService: BandsService,) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.bandForm = this.formBuilder.group({
      weight: ['', Validators.compose([Validators.required, Validators.max(100), Validators.min(1)])],
    });
    this.colorForm = new FormControl('', Validators.required);
  }

  /**
   * Uses Modal Service to open a Modal Window (content in html template)
   * using the id provided in params
   */
  openModal() {
    this.buildForm();
    this.modalService.open(this.id);
  }

  /**
   * Uses Modal Service to close a Modal Window (content in html template)
   * using the id provided in params
   */
  closeModal() {
    this.modalService.close(this.id);
  }

  /**
   * Resets the form when the modal is closed
   */
  onModalClosed() {

  }

  onSubmit() {
    const band = new Band();
    band.color = this.colorForm.value;
    band.weight = this.bandForm.value.weight;

    this.bandsService.saveBand(band).subscribe(bandCreated => {
      this.band.next(bandCreated);
    });

    this.closeModal();
  }
}
