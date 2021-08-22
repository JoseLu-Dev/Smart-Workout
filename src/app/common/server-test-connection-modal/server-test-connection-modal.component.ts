import { ServerTestConnectionService } from './server-test-connection.service';
import { ModalService } from './../modals/base-modal/modal.service';
import { AfterViewChecked, Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalBaseComponent } from 'src/app/core/common/components/modals/base-modal';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-server-test-connection-modal',
  templateUrl: './server-test-connection-modal.component.html',
  styleUrls: ['./server-test-connection-modal.component.scss'],
})
export class ServerTestConnectionModalComponent extends ModalBaseComponent implements AfterViewInit {

  id = `ServerTestConnectionModalComponent-${Math.random()}`;

  constructor(
    private modalService: ModalService,
    private serverTestConnectionService: ServerTestConnectionService,
    ) {
    super(modalService);
  }

  ngAfterViewInit() {
    this.openModal();
    //TODO: catch http errors
    this.serverTestConnectionService.testConnection().pipe(take(1)).subscribe(response => {
      this.closeModal();
    });
  }

  onModalClosed(): void {

  }
  onModalOpened(): void {

  }
}
