import { CorePipesModule } from './../pipes/core-pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercisesSetListComponent } from './exercises-set-list/exercises-set-list.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { ExercisesSetComponent } from './exercises-set-list/exercises-set/exercises-set.component';
import { ExercisesSetAddFormComponent } from './exercises-set-add-form/exercises-set-add-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonExerciseStrategyComponent } from './exercises-set-add-form/common-strategy/common-exercise-strategy.component';
import { EmomStrategyComponent } from './exercises-set-add-form/emom-strategy/emom-strategy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseSelectionComponent } from './exercises-set-add-form/exercise-selection/exercise-selection.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CorePipesModule,
    NgSelectModule,
  ],
  declarations: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    ExercisesSetComponent,
    ExercisesSetAddFormComponent,
    CommonExerciseStrategyComponent,
    EmomStrategyComponent,
    ExerciseSelectionComponent
  ],
  exports: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    ExercisesSetAddFormComponent,
  ]
})
export class CoreWidgetsModule {}
