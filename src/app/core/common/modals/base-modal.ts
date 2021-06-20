import { ModalService } from '../../../common/modals/base-modal/modal.service';
export abstract class ModalBaseComponent {
    id: string;

    constructor(private modalServ: ModalService) {}

    openModal(): void {
        this.modalServ.open(this.id);
    }

    closeModal(): void {
        this.modalServ.close(this.id);
    }

    abstract onModalClosed(): void;
}
