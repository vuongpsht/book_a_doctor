import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DoctorTag} from './DoctorTag';

interface props {
  doctors: string[];
}

export const ChoosePatient: FC<props> = ({doctors}) => {
  const mDoctors = ['ADD_MORE', ...doctors];
  return (
    <View style={s.container}>
      <Text style={s.title}>Choose Patient:</Text>
      <FlatList
        data={mDoctors}
        keyExtractor={(item) => item}
        initialNumToRender={20}
        horizontal
        ItemSeparatorComponent={() => <View style={s.ItemSeparatorComponent} />}
        renderItem={({item}) => <DoctorTag name={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  ItemSeparatorComponent: {
    width: 15,
  },
});
