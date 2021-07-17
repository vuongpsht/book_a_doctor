import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Back, Stethoscope} from 'themes/image';
import {metrics} from 'themes/Dimension';

export const Header = () => {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.smallFlex}>
        <Back width={15} height={15} />
      </TouchableOpacity>

      <View style={s.titleWrapper}>
        <Text style={s.title}>Book a Doctor</Text>
      </View>

      <View style={s.smallFlex}>
        <Stethoscope width={30} height={30} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  smallFlex: {
    flex: 1,
  },
});
