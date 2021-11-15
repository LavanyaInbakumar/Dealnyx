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
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Thank = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <View style={styles.imageView}>
          <Image source={require('../images/tick.png')} style={styles.tick} />
        </View>
        <View style={styles.thank}>
          <Text style={styles.thankyou}>Thank you!</Text>
        </View>
        <View style={styles.smalltext}>
          <Text style={styles.smallText}>OTP Successfully Verified</Text>
        </View>

        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.text}>PROCEED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  // arrangeItem: {
  //   flex: 1,
  //   alignItem: 'center',
  //   justifyContent: 'center',
  // },
  imageView: {
    marginBottom: 20,
    alignItems: 'center',
  },
  tick: {
    width: 90,
    height: 90,
  },
  thank: {
    alignItems: 'center',
  },

  thankyou: {
    color: '#191970',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  smalltext: {
    paddingBottom: 30,
    alignItems: 'center',
    paddingTop: 10,
  },

  smallText: {
    fontSize: 18,
    color: '#777791',
  },
  buttonview: {
    alignItems: 'center',
  },

  touchableOpacity: {
    width: 200,
    height: 50,
    backgroundColor: '#fdd932',
    borderRadius: 25,
    color: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Thank;
