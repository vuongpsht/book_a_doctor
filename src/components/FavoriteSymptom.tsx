import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {chunk} from 'lodash';
import {SelectedSymptom} from '../types/DoctorStore';
import {metrics} from '../themes/Dimension';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {useStore} from '../hooks/useRxStore';
import {SymptomOptionListing} from './SymptomOptionListing';

export const FavoriteSymptom = () => {
  const favoriteSymptom = useStore({
    init: bookDoctorStore.favoriteSymptom,
    subject: bookDoctorStore.favoriteSymptomSubject,
  });
  const data: SelectedSymptom[] = chunk(favoriteSymptom, 3);
  const onPressItem = (symptom: string) => {
    bookDoctorStore.dispatchToggleSelectedList(symptom);
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Choose symptoms and reasons:</Text>
      <SymptomOptionListing data={data} onPressItem={onPressItem} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 10,
    width: metrics.screenWidth * 0.9,
  },

  title: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
});
