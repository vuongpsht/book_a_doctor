import React, {FC, useRef} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HOURS_RANGE, ITEM_HEIGHT} from '../../constant/DateConstant';
import {RowStyle as s} from './rowStyle';

interface props {
  timeIndex: number;
  setTimeIndex: (v: number) => void;
}

export const HoursScroller: FC<props> = ({timeIndex, setTimeIndex}) => {
  const hoursRef = useRef<FlatList>(null);

  const handleChangeTime = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = nativeEvent;
    const mIndex = contentOffset.y / ITEM_HEIGHT;
    if (Math.ceil(mIndex) + 1 < HOURS_RANGE.length) {
      setTimeIndex(Math.ceil(mIndex));
    } else {
      const lastIndex = HOURS_RANGE.length - 1;
      hoursRef?.current?.scrollToIndex({animated: true, index: lastIndex});
      setTimeIndex(lastIndex);
    }
  };

  return (
    <FlatList
      ref={hoursRef}
      ListHeaderComponent={() => <View style={s.FooterHeader} />}
      ListFooterComponent={() => <View style={s.FooterHeader} />}
      showsVerticalScrollIndicator={false}
      data={HOURS_RANGE}
      keyExtractor={(item) => item.toString()}
      renderItem={({item, index}) => {
        const isSelected = index === timeIndex;
        return (
          <TouchableOpacity style={s.row}>
            <Text style={isSelected ? s.dateTxtSelected : s.dateTxtUnSelected}>
              {item}
            </Text>
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
      onMomentumScrollEnd={handleChangeTime}
    />
  );
};
