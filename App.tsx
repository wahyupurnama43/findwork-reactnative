import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
