import { ModalService } from '../../../../common/modals/base-modal/modal.service';
export abstract class ModalBaseComponent {
    id: string;

    constructor(private modalServ: ModalService) {}

    openModal(): void {
        this.modalServ.open(this.id);
        this.onModalOpened();
    }

    closeModal(): void {
        this.modalServ.close(this.id);
        this.onModalClosed();
    }

    abstract onModalClosed(): void;
    abstract onModalOpened(): void;
}
