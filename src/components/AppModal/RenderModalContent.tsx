import React, {FC} from 'react';
import {ModalOpenEnum} from '../../constant/ModalOpenEnum';
import {DatePicker} from './DatePicker';
import {AddMoreSymptom} from './AddMoreSymptom';
import {TouchableOpacity} from 'react-native';

interface props {
  modalType: ModalOpenEnum;
}
export const RenderModalContent: FC<props> = React.memo(
  ({modalType}) => {
    const render = () => {
      switch (modalType) {
        case ModalOpenEnum.DATEPICKER:
          return <DatePicker />;
        case ModalOpenEnum.SYMPTOM:
          return <AddMoreSymptom />;
        default:
          return <></>;
      }
    };

    return <TouchableOpacity activeOpacity={1}>{render()}</TouchableOpacity>;
  },
  () => true,
);
