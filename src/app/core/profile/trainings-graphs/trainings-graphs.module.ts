import { IonicModule } from '@ionic/angular';
import { BarCharComponent } from './bar-char/bar-char.component';
import { TrainingsGraphsComponent } from './trainings-graphs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [TrainingsGraphsComponent, BarCharComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChartsModule
  ],
  exports: [TrainingsGraphsComponent]
})
export class TrainingsGraphsModule { }
