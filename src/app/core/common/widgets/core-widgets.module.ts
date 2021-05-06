import { ExercisesSetListComponent } from './exercises-set-list/exercises-set-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsListComponent } from './trainings-list/trainings-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TrainingsListComponent, ExercisesSetListComponent],
  exports: [TrainingsListComponent, ExercisesSetListComponent]
})
export class CoreWidgetsModule {}
