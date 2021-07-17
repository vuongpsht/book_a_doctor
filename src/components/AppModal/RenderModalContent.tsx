import React, {FC} from 'react';
import {ModalOpenEnum} from '../../constant/ModalOpenEnum';
import {DatePicker} from './DatePicker';
import {AddMoreSymptom} from './AddMoreSymptom';
import {TouchableOpacity, Keyboard} from 'react-native';

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

    const onPress = () => Keyboard.dismiss();

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        {render()}
      </TouchableOpacity>
    );
  },
  () => true,
);
