import { CoreWidgetsModule } from './../common/widgets/core-widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { CustomCalendarComponent } from '../common/widgets/custom-calendar/custom-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    CoreWidgetsModule
  ],
  declarations: [CalendarPage, CustomCalendarComponent,],
})
export class CalendarPageModule {}
