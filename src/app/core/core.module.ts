import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorePageRoutingModule } from './core-routing.module';

import { CorePage } from './core.page';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorePageRoutingModule
  ],
  declarations: [CorePage, NavBarComponent, NavBarMobileComponent]
})
export class CorePageModule {}
