import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './../../../../common/modals/base-modal/modal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training-modal',
  templateUrl: './new-training-modal.component.html',
  styleUrls: ['./new-training-modal.component.scss'],
})
export class NewTrainingModalComponent implements OnInit {

  @Input() date: Date;

  /**
   * Modal id
   */
  id = `new-training-modal${Math.random()}`;

  /**
   * Training form
   */
  public trainingForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      color: ['', Validators.required],
    })
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
    this.trainingForm = null;
  }

  onSubmit(): void {
    //TODO: handle form data
    console.log(this.trainingForm.value);

    this.closeModal();
  }
}
