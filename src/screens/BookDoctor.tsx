import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'components/Header';
import {ToggleHeader} from 'components/ToggleHeader';
import {constantData} from '../constant/ConstantData';
import {ChoosePatient} from '../components/ChoosePatient';
import {SymptomInput} from '../components/SymptomInput';
import {FavoriteSymptom} from '../components/FavoriteSymptom';
import {SelectedReason} from '../components/SelectedReason';

export const BookDoctor = () => {
  return (
    <View style={s.container}>
      <Header />
      <ToggleHeader buttons={constantData.toggle} />
      <ChoosePatient doctors={constantData.doctors} />
      <SymptomInput />
      <SelectedReason />
      <FavoriteSymptom />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
