import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsListComponent } from './trainings-list/trainings-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TrainingsListComponent,],
  exports: [TrainingsListComponent,]
})
export class TrainingsListWidgetModule {}
