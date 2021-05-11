import { SecondsFormatPipe } from './seconds-format.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SecondsFormatPipe],
  imports: [
    CommonModule
  ],
  exports:[SecondsFormatPipe]
})
export class CorePipesModule { }
