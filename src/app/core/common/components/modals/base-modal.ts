import { ChangeDetectorRef } from '@angular/core';
import { ModalService } from '../../../../common/modals/base-modal/modal.service';

export abstract class ModalBaseComponent {
    id: string;
    opened = false;

    constructor(
        private modalServ: ModalService,
        private cd: ChangeDetectorRef
        ) {}

    openModal(): void {
        this.modalServ.open(this.id);
        this.onModalOpened();
        this.opened = true;
        this.cd.detectChanges();
    }

    closeModal(): void {
        this.modalServ.close(this.id);
        this.onModalClosed();
        this.opened = false;
        this.cd.detectChanges();
    }

    abstract onModalClosed(): void;
    abstract onModalOpened(): void;
}
