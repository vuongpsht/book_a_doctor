import React, {FC, useRef} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RowStyle as s} from './rowStyle';
import {ITEM_HEIGHT, MONTH, WEEKDAY} from '../../constant/DateConstant';

interface props {
  days: number[];
  dateIndex: number;
  setDateIndex: (v: number) => void;
}

export const DateScroller: FC<props> = ({dateIndex, setDateIndex, days}) => {
  const dateRef = useRef<FlatList>(null);
  const handleChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = nativeEvent;
    const ceilContentOffset = Math.ceil(contentOffset.y);
    const mIndex = ceilContentOffset / ITEM_HEIGHT;
    if (Math.ceil(mIndex) + 1 < days.length) {
      setDateIndex(Math.ceil(mIndex));
    } else {
      const lastIndex = days.length - 1;
      dateRef?.current?.scrollToIndex({animated: true, index: lastIndex});
      setDateIndex(lastIndex);
    }
  };

  return (
    <FlatList
      ref={dateRef}
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
      snapToAlignment={'end'}
      decelerationRate={'fast'}
      pagingEnabled
      snapToInterval={ITEM_HEIGHT}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleChange}
    />
  );
};
