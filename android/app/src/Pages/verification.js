import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Verification = () => {
  return (
    <View style={styles.container_yellow}>
      <View style={styles.contentView}>
        <Image source={require('../images/logo.png')} />
        <Image source={require('../images/verify_pic.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.topText}>KYC verification</Text>
          <Text style={styles.approved}>Approved</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container_yellow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffeb3b',
  },
  contentView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '90%',
  },
  textContainer: {
    paddingTop: 20,
  },
  topText: {
    color: '#113270',
    fontSize:16
  },
  approved: {
    color: '#ffeb3b',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:18
  },
});

export default Verification;
