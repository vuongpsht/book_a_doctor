import React, {FC} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RowStyle as s} from './rowStyle';
import {MONTH, WEEKDAY} from '../../constant/DateConstant';

interface props {
  days: number[];
  dateIndex: number;
  ITEM_HEIGHT: number;
  setDateIndex: (v: number) => void;
}

export const DateScroller: FC<props> = ({
  dateIndex,
  setDateIndex,
  days,
  ITEM_HEIGHT,
}) => {
  const handleChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = nativeEvent;
    const mIndex = contentOffset.y / 50;
    setDateIndex(Math.floor(mIndex));
  };

  return (
    <FlatList
      ListHeaderComponent={() => <View style={s.FooterHeader} />}
      ListFooterComponent={() => <View style={s.FooterHeader} />}
      showsVerticalScrollIndicator={false}
      data={days}
      keyExtractor={(item) => item.toString()}
      renderItem={({item, index}) => {
        const mDate = new Date(item);
        const isSelected = index === dateIndex;
        return (
          <TouchableOpacity style={s.row}>
            <Text style={isSelected ? s.dateTxtSelected : s.dateTxtUnSelected}>
              {WEEKDAY[mDate.getDay()]}
            </Text>
            <Text
              style={isSelected ? s.dateTxtSelected : s.dateTxtUnSelected}>{`${
              MONTH[mDate.getMonth()]
            }, ${mDate.getDate()} ${mDate.getFullYear()}`}</Text>
          </TouchableOpacity>
        );
      }}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      pagingEnabled
      snapToInterval={ITEM_HEIGHT}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleChange}
    />
  );
};
