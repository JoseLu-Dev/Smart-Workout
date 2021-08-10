import { NewTrainingModalComponent } from './new-training-modal/new-training-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './../../../common/modals/base-modal/modal.module';
import { BandsSelectionModalComponent } from './bands/bands-selection-modal/bands-selection-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandsCreationModalComponent } from './bands/bands-creation-modal/bands-creation-modal.component';
import { NgxColorsModule } from 'ngx-colors';
import { ExerciseModalComponent } from './exercise-modal/exercise-modal.component';
import { ExerciseSearchModalComponent } from './exercise-search-modal/exercise-search-modal.component';
import { TrainingCreationOptionsModalComponent } from './training-creation-options-modal/training-creation-options-modal.component';



@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxColorsModule
  ],
  declarations: [
    BandsCreationModalComponent,
    BandsSelectionModalComponent,
    NewTrainingModalComponent,
    ExerciseModalComponent,
    ExerciseSearchModalComponent,
    TrainingCreationOptionsModalComponent,
  ],
  exports: [
    BandsCreationModalComponent,
    BandsSelectionModalComponent,
    NewTrainingModalComponent,
    ExerciseModalComponent,
    ExerciseSearchModalComponent,
    TrainingCreationOptionsModalComponent,
  ],
})
export class CoreModalsModule { }
