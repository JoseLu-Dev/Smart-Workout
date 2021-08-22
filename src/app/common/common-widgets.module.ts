import { ServerTestConnectionModalComponent } from './server-test-connection-modal/server-test-connection-modal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from './modals/base-modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
  ],
  declarations: [
    ServerTestConnectionModalComponent,
  ],
  exports: [
    ServerTestConnectionModalComponent,
  ]
})
export class CommonWidgetsModule {}
