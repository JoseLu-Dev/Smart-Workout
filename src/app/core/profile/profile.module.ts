import { TrainingsGraphsModule } from './trainings-graphs/trainings-graphs.module';
import { TrainingsGraphsComponent } from './trainings-graphs/trainings-graphs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    TrainingsGraphsModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
