import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import RootNavigation from './navigation/RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <MyStatusBar />
    <RootNavigation />
  </SafeAreaView>
);

export default App;
