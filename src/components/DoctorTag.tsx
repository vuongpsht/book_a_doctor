import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Plus} from '../themes/image';
import {bookDoctorStore} from '../store/BookDoctorStore';
import {useStore} from '../hooks/useRxStore';
import {color} from '../themes/corlor';

interface props {
  name: string;
}

const DoctorTagView = React.memo(
  ({name}: props) => {
    const onPressItem = () => bookDoctorStore.dispatchSelectedList(name);
    const selectedDoctor = useStore({
      init: bookDoctorStore.selectedDoctors,
      subject: bookDoctorStore.selectedDoctorsSubject,
    });
    const isSelected: boolean = !!selectedDoctor?.find((e) => e === name);

    return (
      <TouchableOpacity onPress={onPressItem} style={s.containerWrapper}>
        <View
          style={[
            s.container,
            isSelected ? s.containerSelected : s.containerUnselected,
          ]}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  },
  () => true,
);

const EmptyTag = () => {
  return (
    <View style={s.emptyTagWrapper}>
      <View style={s.container}>
        <Text>Add</Text>
        <View style={s.plusSvgWrapper}>
          <Plus color={color.black} style={s.svg} width={40} height={40} />
        </View>
      </View>
    </View>
  );
};

export const DoctorTag: FC<props> = ({name}) => {
  if (name === 'ADD_MORE') {
    return <EmptyTag />;
  } else {
    return <DoctorTagView name={name} />;
  }
};

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 9,
    minWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.white,
  },
  containerSelected: {
    borderColor: color.baseGreen,
  },
  containerUnselected: {
    borderColor: 'white',
  },
  plusSvgWrapper: {
    position: 'absolute',
    bottom: 1,
    left: 1,
    overflow: 'hidden',
    width: 35,
    height: 35,
  },
  svg: {
    position: 'absolute',
    left: -10,
    bottom: -12,
  },
  emptyTagWrapper: {
    borderStyle: 'dashed',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: color.baseGreen,
    borderWidth: 1,
    borderRadius: 10,
  },
  containerWrapper: {
    borderStyle: 'dashed',
    padding: 5,
  },
});
