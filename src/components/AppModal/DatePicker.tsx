import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DateScroller} from './DateScroller';
import {HoursScroller} from './HoursScroller';
import {ShadowView} from '../ShadowView';
import {bookDoctorStore} from '../../store/BookDoctorStore';
import {HOURS_RANGE} from '../../constant/DateConstant';
import {modalStore} from '../../store/ModalStore';
import {RowStyle as s} from './rowStyle';

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
