import { SecondsFormatPipe } from './seconds-format.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetQuantityFormatterPipe } from './set-quantity-formatter.pipe';
import { IsArrayPipe } from './is-array.pipe';
import { IsObjectPipe } from './is-object.pipe';



@NgModule({
  declarations: [SecondsFormatPipe, SetQuantityFormatterPipe, IsArrayPipe, IsObjectPipe],
  imports: [
    CommonModule
  ],
  exports:[SecondsFormatPipe, SetQuantityFormatterPipe, IsArrayPipe, IsObjectPipe]
})
export class CorePipesModule { }
