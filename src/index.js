import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
    </View>
  );
}
