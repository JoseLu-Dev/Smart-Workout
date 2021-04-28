import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorePageRoutingModule } from './core-routing.module';

import { CorePage } from './core.page';
import { NavBarMobileComponent } from './nav-bar/nav-bar-bottom/nav-bar-mobile.component';
import { NavBarComponent } from './nav-bar/nav-bar-top/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorePageRoutingModule
  ],
  declarations: [CorePage, NavBarMobileComponent, NavBarComponent]
})
export class CorePageModule {}
