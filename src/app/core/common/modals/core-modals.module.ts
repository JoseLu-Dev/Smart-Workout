import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './../../../common/modals/base-modal/modal.module';
import { BandsSelectionModalComponent } from './bands/bands-selection-modal/bands-selection-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandsCreationModalComponent } from './bands/bands-creation-modal/bands-creation-modal.component';



@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BandsCreationModalComponent, BandsSelectionModalComponent],
  exports: [BandsCreationModalComponent, BandsSelectionModalComponent],
})
export class CoreModalsModule { }
