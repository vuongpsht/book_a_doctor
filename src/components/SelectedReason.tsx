import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {metrics} from '../themes/Dimension';
import {chunk} from 'lodash';
import {SelectedSymptom} from '../types/DoctorStore';
import {Check} from '../themes/image';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {useStore} from '../hooks/useRxStore';
export const SelectedReason = () => {
  const selectedSymptom = useStore<SelectedSymptom>({
    init: bookDoctorStore.selectedSymptom,
    subject: bookDoctorStore.selectedSymptomSubject,
  });
  const data: SelectedSymptom[] = chunk(selectedSymptom, 3);
  if (!!selectedSymptom.length) {
    return (
      <View style={s.container}>
        <Text style={s.title}>Selected symptoms and reasons:</Text>
        <View>
          {data.map((symptoms, index) => {
            return (
              <View key={index.toString()} style={s.row}>
                {symptoms.map((symptom) => {
                  const onPressItem = () => {
                    bookDoctorStore.dispatchToggleSelectedList(symptom);
                  };
                  return (
                    <Fragment key={symptom}>
                      <TouchableOpacity onPress={onPressItem} style={s.item}>
                        <Text style={s.txt}>{symptom}</Text>
                        <Check width={7} height={7} color={'white'} />
                      </TouchableOpacity>
                    </Fragment>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
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
    backgroundColor: '#32C2D0',
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
    color: 'white',
    fontSize: 12,
    marginRight: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
});
