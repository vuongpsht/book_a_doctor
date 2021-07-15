import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {metrics} from '../../themes/Dimension';
import {DateScroller} from './DateScroller';
import {HoursScroller} from './HoursScroller';
import {ShadowView} from '../ShadowView';
import {bookDoctorStore} from '../../store/BookDoctorStore';
import {HOURS_RANGE} from '../../constant/DateConstant';
import {modalStore} from '../../store/ModalStore';

const ITEM_HEIGHT = 50;

export const DatePicker = () => {
  const [days, setDays] = useState<number[]>([]);
  const [dateIndex, setDateIndex] = useState<number>(0);
  const [timeIndex, setTimeIndex] = useState<number>(0);
  useEffect(() => {
    const mDaysList = [];
    for (let i = 0; i <= 100 - 1; i++) {
      mDaysList.push(new Date().setDate(new Date().getDate() + i));
    }
    setDays(mDaysList);
  }, []);

  const onPressSubmit = () => {
    bookDoctorStore.dispatchBookingTime(
      days[dateIndex],
      HOURS_RANGE[timeIndex],
    );
    modalStore.close();
  };
  return (
    <View style={s.container}>
      <View style={s.titleGroup}>
        <Text style={s.title}>Schedule appointment</Text>
        <Text style={s.subTitle}>Please select date and time window:</Text>
      </View>
      <View style={s.datepickerWrapper}>
        <View style={s.eachPart}>
          <DateScroller
            days={days}
            dateIndex={dateIndex}
            ITEM_HEIGHT={ITEM_HEIGHT}
            setDateIndex={setDateIndex}
          />
        </View>
        <View style={s.eachPart}>
          <HoursScroller timeIndex={timeIndex} setTimeIndex={setTimeIndex} />
        </View>
        <View style={s.detector} />
      </View>
      <TouchableOpacity onPress={onPressSubmit} style={s.btnWrapper}>
        <ShadowView style={s.btn}>
          <Text style={s.btnText}>Done</Text>
        </ShadowView>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.7,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 20,
  },
  titleGroup: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  datepickerWrapper: {
    height: metrics.screenHeight * 0.45,
    width: '100%',
    flexDirection: 'row',
  },
  eachPart: {
    flex: 1,
    alignItems: 'center',
  },
  detector: {
    position: 'absolute',
    width: '100%',
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#48D7DF',
    top: metrics.screenHeight * 0.2,
    zIndex: -1,
  },
  btnWrapper: {
    marginTop: 10,
  },
  btn: {
    width: metrics.screenWidth * 0.9,
    height: 40,
    backgroundColor: '#48D7DF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
});
