import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [TrainingsListComponent,],
  exports: [TrainingsListComponent,]
})
export class TrainingsListWidgetModule {}
