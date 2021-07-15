import {Subject} from 'rxjs';
import {ModalOpenEnum} from '../../constant/ModalOpenEnum';
import {ModalType} from '../../types/ModalType';

class ModalStore {
  private _modalState: ModalType = {
    visible: false,
    modalType: undefined,
  };
  private _modalStateSubject: Subject<ModalType> = new Subject<ModalType>();

  get modalState(): ModalType {
    return this._modalState;
  }

  get modalStateSubject(): Subject<ModalType> {
    return this._modalStateSubject;
  }

  private setModal(v: ModalType) {
    this._modalState = v;
    this._modalStateSubject.next(v);
  }

  open(v: ModalOpenEnum) {
    this.setModal({visible: true, modalType: v});
  }

  close() {
    this.setModal({visible: false, modalType: undefined});
  }
}

export const modalStore = new ModalStore();
