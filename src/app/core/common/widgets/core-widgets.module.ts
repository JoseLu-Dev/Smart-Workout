import { CorePipesModule } from './../pipes/core-pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercisesSetListComponent } from './exercises-set-list/exercises-set-list.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { ExercisesSetComponent } from './exercises-set-list/exercises-set/exercises-set.component';

@NgModule({
  imports: [CommonModule, CorePipesModule],
  declarations: [TrainingsListComponent, ExercisesSetListComponent, ExercisesSetComponent],
  exports: [TrainingsListComponent, ExercisesSetListComponent]
})
export class CoreWidgetsModule {}
