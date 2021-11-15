import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';



const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/dealyn_white.png')} />
      <StatusBar hidden={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeb3b',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  x_text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
