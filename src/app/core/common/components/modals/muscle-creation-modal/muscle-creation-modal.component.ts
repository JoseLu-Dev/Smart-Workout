import { Muscle } from './../../../models/muscles.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/common/modals/base-modal/modal.service';
import { ModalBaseComponent } from '../base-modal';
import { MusclesService } from '../../../services/muscles.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-muscle-creation-modal',
  templateUrl: './muscle-creation-modal.component.html',
  styleUrls: ['./muscle-creation-modal.component.scss'],
})
export class MuscleCreationModalComponent extends ModalBaseComponent {

  @Output() muscleCreated = new EventEmitter<Muscle>();

  muscleForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private musclesService: MusclesService) {
    super(modalService);
    this.id = `MuscleCreationModalComponent-${Math.random()}`;
  }

  onModalClosed(): void {

  }

  onModalOpened(): void {
    this.muscleForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    this.musclesService.saveMuscle(this.muscleForm.value).pipe(take(1)).subscribe(muscle => {this.muscleCreated.next(muscle);});
    this.closeModal();
  }

}
