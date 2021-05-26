import { SecondsFormatPipe } from './seconds-format.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetQuantityFormatterPipe } from './set-quantity-formatter.pipe';



@NgModule({
  declarations: [SecondsFormatPipe, SetQuantityFormatterPipe],
  imports: [
    CommonModule
  ],
  exports:[SecondsFormatPipe, SetQuantityFormatterPipe]
})
export class CorePipesModule { }
