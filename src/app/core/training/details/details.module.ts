import { ChartsModule } from 'ng2-charts';
import { CorePipesModule } from './../../common/pipes/core-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { CoreWidgetsModule } from '../../common/widgets/core-widgets.module';
import { TrainingStatsComponent } from './training-stats/training-stats.component';
import { CountPerMuscleTableComponent } from './training-stats/count-per-muscle-table/count-per-muscle-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    CoreWidgetsModule,
    CorePipesModule,
    ChartsModule,
  ],
  declarations: [DetailsPage, TrainingStatsComponent, CountPerMuscleTableComponent]
})
export class DetailsPageModule {}
