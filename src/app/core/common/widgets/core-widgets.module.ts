import { CorePipesModule } from './../pipes/core-pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercisesSetListComponent } from './exercises-set-list/exercises-set-list.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { ExercisesSetComponent } from './exercises-set-list/exercises-set/exercises-set.component';
import { ExercisesSetAddFormComponent } from './exercises-set-add-form/exercises-set-add-form.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [CommonModule, CorePipesModule, NgSelectModule],
  declarations: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    ExercisesSetComponent,
    ExercisesSetAddFormComponent,
  ],
  exports: [
    TrainingsListComponent,
    ExercisesSetListComponent,
    ExercisesSetAddFormComponent,
  ]
})
export class CoreWidgetsModule {}
