import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorld } from './src/components';
import { LoginScreen } from './src/screens/login'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello asd...!!!</Text>
      <HelloWorld name="Hoa"/>
      <LoginScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
