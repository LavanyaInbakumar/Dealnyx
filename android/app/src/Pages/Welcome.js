import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={styles.welcome}>Welcome</Text>
      <StatusBar hidden={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeb3b',
  },
  welcome: {
    color: '#000',
    fontSize: 40,
  },
});

export default Welcome;
