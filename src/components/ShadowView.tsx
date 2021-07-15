import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface props {
  style?: StyleProp<ViewStyle>;
}

export const ShadowView: FC<props> = ({children, style}) => {
  return (
    <View style={[s.container, style]}>
      <View style={s.shadowTop} />
      <View style={s.shadowRight} />
      {children}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#EBF4FE',
    overflow: 'hidden',
  },
  shadowTop: {
    position: 'absolute',
    top: -2,
    width: '100%',
    height: 2,
    borderRadius: 0.5,
    shadowColor: '#000',
    backgroundColor: '#EBF4FE',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,

    elevation: 9,
  },
  shadowRight: {
    position: 'absolute',
    left: -2,
    height: '100%',
    width: 2,
    borderRadius: 0.5,
    backgroundColor: '#EBF4FE',

    shadowColor: '#000',
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
