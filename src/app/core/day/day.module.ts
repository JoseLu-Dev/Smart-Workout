import { CoreWidgetsModule } from './../common/widgets/core-widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayPageRoutingModule } from './day-routing.module';

import { DayPage } from './day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageRoutingModule,
    CoreWidgetsModule
  ],
  declarations: [DayPage,]
})
export class DayPageModule {}
