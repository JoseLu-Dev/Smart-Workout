import { MuscleSelectionComponent } from './widgets/muscle-selection/muscle-selection.component';
import { TrainingSelectionModalComponent } from './modals/training-selection-modal/training-selection-modal.component';
import { ModalModule } from './../../../common/modals/base-modal/modal.module';
/* eslint-disable max-len */
import { CircuitExerciseStrategyComponent } from './widgets/exercises-set-add-form/strategies/circuit-strategy/circuit-exercise-strategy.component';
import { SetSelectionComponent } from './widgets/exercises-set-add-form/set-selection/set-selection.component';
import { ExercisesSetAddFormComponent } from './widgets/exercises-set-add-form/exercises-set-add-form.component';
import { ExercisesSetListComponent } from './widgets/exercises-set-list/exercises-set-list.component';
import { AccordionComponent } from './widgets/accordion/accordion.component';
import { SuperSetStrategyComponent } from './widgets/exercises-set-add-form/strategies/super-set-strategy/super-set-strategy.component';
import { CorePipesModule } from '../pipes/core-pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SetPropertiesSelectionComponent } from './widgets/exercises-set-add-form/set-selection/set-properties-selection/set-properties-selection.component';
import { TrainingsListComponent } from './widgets/trainings-list/trainings-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonExerciseStrategyComponent } from './widgets/exercises-set-add-form/strategies/common-strategy/common-exercise-strategy.component';
import { EmomStrategyComponent } from './widgets/exercises-set-add-form/strategies/emom-strategy/emom-strategy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseSelectionComponent } from './widgets/exercises-set-add-form/set-selection/exercise-selection/exercise-selection.component';

import { AccordionItemComponent } from './widgets/accordion/accordion-item/accordion-item.component';
import { MultipleItemListStrategyComponent } from './widgets/exercises-set-list/strategies/multiple-item-list-strategy/multiple-item-list-strategy.component';
import { NormalItemListStrategyComponent } from './widgets/exercises-set-list/strategies/normal-item-list-strategy/normal-item-list-strategy.component';
import { TrainingCalendarSelectionComponent } from './widgets/training-calendar-selection/training-calendar-selection.component';
import { CustomCalendarComponent } from './widgets/custom-calendar/custom-calendar.component';

import { NewTrainingModalComponent } from './modals/new-training-modal/new-training-modal.component';
import { BandsSelectionModalComponent } from './modals/bands/bands-selection-modal/bands-selection-modal.component';
import { BandsCreationModalComponent } from './modals/bands/bands-creation-modal/bands-creation-modal.component';
import { NgxColorsModule } from 'ngx-colors';
import { ExerciseModalComponent } from './modals/exercise-modal/exercise-modal.component';
import { ExerciseSearchModalComponent } from './modals/exercise-search-modal/exercise-search-modal.component';
import { TrainingCreationOptionsModalComponent } from './modals/training-creation-options-modal/training-creation-options-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CorePipesModule,
    NgSelectModule,
    ModalModule,
    NgxColorsModule,
  ],
  declarations: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    NormalItemListStrategyComponent,
    MultipleItemListStrategyComponent,
    ExercisesSetAddFormComponent,
    CommonExerciseStrategyComponent,
    EmomStrategyComponent,
    ExerciseSelectionComponent,
    SetPropertiesSelectionComponent,
    SetSelectionComponent,
    AccordionComponent,
    AccordionItemComponent,
    SuperSetStrategyComponent,
    CircuitExerciseStrategyComponent,
    TrainingCalendarSelectionComponent,
    CustomCalendarComponent,
    BandsCreationModalComponent,
    BandsSelectionModalComponent,
    NewTrainingModalComponent,
    ExerciseModalComponent,
    ExerciseSearchModalComponent,
    TrainingCreationOptionsModalComponent,
    TrainingSelectionModalComponent,
    MuscleSelectionComponent,
  ],
  exports: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    ExercisesSetAddFormComponent,
    TrainingCalendarSelectionComponent,
    BandsCreationModalComponent,
    BandsSelectionModalComponent,
    NewTrainingModalComponent,
    ExerciseModalComponent,
    ExerciseSearchModalComponent,
    TrainingCreationOptionsModalComponent,
    TrainingSelectionModalComponent,
    ExerciseSelectionComponent,
    MuscleSelectionComponent,
  ]
})
export class CoreWidgetsModule {}
