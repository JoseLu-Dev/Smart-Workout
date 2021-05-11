import { CorePipesModule } from './../pipes/core-pipes.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercisesSetListComponent } from './exercises-set-list/exercises-set-list.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

@NgModule({
  imports: [CommonModule, CorePipesModule],
  declarations: [TrainingsListComponent, ExercisesSetListComponent],
  exports: [TrainingsListComponent, ExercisesSetListComponent]
})
export class CoreWidgetsModule {}
