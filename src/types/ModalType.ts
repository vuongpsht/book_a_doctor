import {ModalOpenEnum} from '../constant/ModalOpenEnum';

export interface ModalType {
  visible: boolean;
  modalType: ModalOpenEnum | undefined;
}
