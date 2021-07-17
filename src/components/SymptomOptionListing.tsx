import React, {FC, Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Plus} from '../themes/image';
import {SelectedSymptom} from '../types/DoctorStore';
interface props {
  data: SelectedSymptom[];
  onPressItem: (v: string) => void;
}
export const SymptomOptionListing: FC<props> = ({data, onPressItem}) => {
  return (
    <Fragment>
      {data.map((symptoms, index) => {
        return (
          <View style={s.row} key={index.toString()}>
            {symptoms.map((symptom, index) => {
              return (
                <Fragment key={symptom}>
                  <TouchableOpacity
                    onPress={() => onPressItem(symptom)}
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
    </Fragment>
  );
};
const s = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
});
