import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RowStyle as s} from './rowStyle';
import {ShadowView} from '../ShadowView';
import {SelectedReason} from '../SelectedReason';
import {SelectMoreSymptom} from '../SelectMoreSymptom';
import {modalStore} from '../../store/ModalStore';

export const AddMoreSymptom = () => {
  const onPressSubmit = () => modalStore.close();
  return (
    <View style={s.container}>
      <View style={s.titleGroup}>
        <Text style={s.title}>Symptoms & Condition</Text>
        <Text style={s.subTitle}>Please specify your symptoms: </Text>
      </View>

      <View style={s.content}>
        <ShadowView style={s.txtInput}>
          <TextInput
            placeholder={'e.g Cough'}
            placeholderTextColor={'#728196'}
          />
        </ShadowView>
      </View>
      <SelectedReason />
      <SelectMoreSymptom />
      <TouchableOpacity
        onPress={onPressSubmit}
        style={[
          s.btnWrapper,
          {position: 'absolute', alignSelf: 'center', bottom: 30},
        ]}>
        <ShadowView style={s.btn}>
          <Text style={s.btnText}>Done</Text>
        </ShadowView>
      </TouchableOpacity>
    </View>
  );
};
