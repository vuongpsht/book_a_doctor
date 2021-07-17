import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {metrics} from '../themes/Dimension';
import {ShadowView} from './ShadowView';
interface props {
  buttons: string[];
  onPress?: (v: number) => void;
  value?: number;
}

const TOGGLE_WIDTH = metrics.screenWidth * 0.8;
const BUTTON_WIDTH = TOGGLE_WIDTH / 2;

export const ToggleHeader: FC<props> = ({buttons, value, onPress}) => {
  const [btnIndex, setBtnIndex] = useState<number>(value ? value : 0);

  const outSideShadowStyle = {
    ...s.shadowOutSide,
    width: TOGGLE_WIDTH / buttons.length,
  };

  const outSideWrapper = {
    ...s.shadowOutSideWrapper,
    width: TOGGLE_WIDTH / buttons.length,
    left: btnIndex === 0 ? 0 : TOGGLE_WIDTH - btnIndex * BUTTON_WIDTH,
  };

  const onPressButton = (index: number) => {
    onPress?.(index);
    setBtnIndex(index);
  };

  return (
    <View style={s.root}>
      {/**
       * @outSideWrap
       * android has conflict between elevation and zIndex
       * we need to wrap it if we want it draw shadow out side
       * source: https://stackoverflow.com/a/49078857
       */}

      <View style={outSideWrapper}>
        <View style={outSideShadowStyle} />
      </View>

      <ShadowView style={s.container}>
        {buttons.map((e, index) => {
          const selected = btnIndex === index;
          return (
            <TouchableOpacity
              key={e}
              onPress={() => onPressButton(index)}
              style={selected ? s.activeButton : s.inActiveButton}>
              <View>
                <Text style={selected ? s.txtActive : s.txt}>{e}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ShadowView>
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    width: TOGGLE_WIDTH,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    width: TOGGLE_WIDTH,
    borderRadius: 10,
    zIndex: 1,
    position: 'absolute',
  },
  inActiveButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 9,
    zIndex: 1,
  },
  shadowOutSide: {
    height: '100%',
    shadowColor: '#000',
    borderRadius: 10,

    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    elevation: 9,
    flex: 1,
  },
  shadowOutSideWrapper: {
    position: 'absolute',
    height: '100%',
    shadowColor: '#000',
    borderRadius: 10,

    backgroundColor: 'transparent',
    flex: 1,
    zIndex: -2,
  },
  //979EA8
  txt: {
    fontSize: 15,
    color: '#979EA8',
  },
  txtActive: {
    fontSize: 15,
    color: '#48D7DF',
    fontWeight: '600',
  },
});
