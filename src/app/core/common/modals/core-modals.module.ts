import { NewTrainingModalComponent } from './new-training-modal/new-training-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './../../../common/modals/base-modal/modal.module';
import { BandsSelectionModalComponent } from './bands/bands-selection-modal/bands-selection-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandsCreationModalComponent } from './bands/bands-creation-modal/bands-creation-modal.component';
import { NgxColorsModule } from 'ngx-colors';



@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxColorsModule
  ],
  declarations: [BandsCreationModalComponent, BandsSelectionModalComponent, NewTrainingModalComponent],
  exports: [BandsCreationModalComponent, BandsSelectionModalComponent, NewTrainingModalComponent],
})
export class CoreModalsModule { }
