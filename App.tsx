/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BookDoctor} from 'screens/BookDoctor';
import {AppModal} from './src/components/AppModal';

const App = () => {
  return (
    <SafeAreaView style={s.container}>
      <BookDoctor />
      <AppModal />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
