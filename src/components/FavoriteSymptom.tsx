import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {chunk} from 'lodash';
import {SelectedSymptom} from '../types/DoctorStore';
import {metrics} from '../themes/Dimension';
import {Plus} from '../themes/image';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {useStore} from '../hooks/useRxStore';
export const FavoriteSymptom = () => {
  const favoriteSymptom = useStore({
    init: bookDoctorStore.favoriteSymptom,
    subject: bookDoctorStore.favoriteSymptomSubject,
  });
  const data: SelectedSymptom[] = chunk(favoriteSymptom, 3);
  return (
    <View style={s.container}>
      <Text style={s.title}>Choose symptoms and reasons:</Text>
      {data.map((symptoms, index) => {
        return (
          <View style={s.row} key={index.toString()}>
            {symptoms.map((symptom, index) => {
              const onPressItem = () => {
                bookDoctorStore.dispatchToggleSelectedList(symptom);
              };
              return (
                <Fragment key={symptom}>
                  <TouchableOpacity
                    onPress={onPressItem}
                    style={s.item}
                    key={index.toString()}>
                    <Text style={s.txt}>{symptom}</Text>
                    <Plus width={7} height={7} color={'#48D7DF'} />
                  </TouchableOpacity>
                </Fragment>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 10,
    width: metrics.screenWidth * 0.9,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    elevation: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  txt: {
    color: '#48D7DF',
    fontSize: 12,
    marginRight: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
});
