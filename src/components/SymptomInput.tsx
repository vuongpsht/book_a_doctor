import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ShadowView} from './ShadowView';
import {metrics} from '../themes/Dimension';
import {ArrowDown, Clock, Search} from '../themes/image';
import {modalStore} from '../store/ModalStore';
import {ModalOpenEnum} from '../constant/ModalOpenEnum';
import {useStore} from '../hooks/useRxStore';
import {bookDoctorStore} from '../store/BookDoctorStore';

export const SymptomInput = () => {
  const date = useStore({
    init: bookDoctorStore.bookingTime,
    subject: bookDoctorStore.bookingTimeSubject,
  });
  const onPressDate = () => modalStore.open(ModalOpenEnum.DATEPICKER);
  return (
    <ShadowView style={s.container}>
      <TouchableOpacity style={s.content}>
        <View style={s.subContainer}>
          <Search width={20} height={20} />
          <Text style={s.txt}>Add reason</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressDate}
        style={[
          s.timeButton,
          {
            backgroundColor: !!date ? '#57DDBB' : '#EDB259',
          },
        ]}>
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
    color: '#979EA8',
    marginLeft: 10,
  },
  timeButton: {
    position: 'absolute',
    right: 10,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#EDB259',
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
