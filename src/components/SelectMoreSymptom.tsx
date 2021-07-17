import React from 'react';
import {Text, View} from 'react-native';
import {RowStyle as s} from './AppModal/rowStyle';
import {SymptomOptionListing} from './SymptomOptionListing';
import {useStore} from '../hooks/useRxStore';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {SelectedSymptom} from '../types/DoctorStore';
import {chunk} from 'lodash';

export const SelectMoreSymptom = () => {
  const personal = useStore({
    init: bookDoctorStore.personalSymptom,
    subject: bookDoctorStore.personalSymptomSubject,
  });
  const data: SelectedSymptom[] = chunk(personal, 3);
  const onPress = (name: string) =>
    bookDoctorStore.dispatchToggleSelectedList(name);
  return (
    <View style={s.content}>
      <Text style={s.subTitle}>Choose your symptoms:</Text>
      <SymptomOptionListing data={data} onPressItem={onPress} />
    </View>
  );
};
