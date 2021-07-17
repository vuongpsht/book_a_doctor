import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ShadowView} from './ShadowView';
import {metrics} from '../themes/Dimension';
import {ArrowDown, Clock, Search} from '../themes/image';
import {modalStore} from '../store/ModalStore';
import {ModalOpenEnum} from '../constant/ModalOpenEnum';
import {useStore} from '../hooks/useRxStore';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {color} from '../themes/corlor';

export const SymptomInput = () => {
  const date = useStore({
    init: bookDoctorStore.bookingTime,
    subject: bookDoctorStore.bookingTimeSubject,
  });
  const onPressDate = () => modalStore.open(ModalOpenEnum.DATEPICKER);
  const onPressSymptom = () => modalStore.open(ModalOpenEnum.SYMPTOM);
  const btnStyle = {
    ...s.timeButton,
    backgroundColor: date ? color.timeGreen : color.timeOrange,
  };
  return (
    <ShadowView style={s.container}>
      <TouchableOpacity onPress={onPressSymptom} style={s.content}>
        <View style={s.subContainer}>
          <Search width={20} height={20} />
          <Text style={s.txt}>Add reason</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDate} style={btnStyle}>
        <Clock width={10} height={10} />
        {date ? (
          <Text style={s.timeText}>
            {date.date} - {date.time}
          </Text>
        ) : (
          <Text style={s.now}>now</Text>
        )}
        <ArrowDown width={10} height={10} />
      </TouchableOpacity>
    </ShadowView>
  );
};

const s = StyleSheet.create({
  container: {
    width: metrics.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    padding: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    color: color.lightGrey,
    marginLeft: 10,
  },
  timeButton: {
    position: 'absolute',
    right: 10,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: color.timeOrange,
    borderRadius: 5,
    alignSelf: 'center',
    height: 30,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  now: {
    color: 'white',
    marginHorizontal: 5,
  },
  timeText: {
    color: 'white',
    marginHorizontal: 5,
    fontSize: 10,
  },
});
