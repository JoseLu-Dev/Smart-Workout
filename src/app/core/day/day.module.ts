import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayPageRoutingModule } from './day-routing.module';

import { DayPage } from './day.page';
import { TrainingsListWidgetModule } from '../common/trainings-list-widget/trainings-list-widget.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageRoutingModule,
    TrainingsListWidgetModule
  ],
  declarations: [DayPage,]
})
export class DayPageModule {}
