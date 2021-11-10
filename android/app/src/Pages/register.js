import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';


const Register = () => {
  return (
    <SafeAreaView style={styles.outer}>
      <StatusBar barStyle='light-content' backgroundColor='#FFBF00' hidden={false} />     
      <ScrollView style={styles.container}>
        <View style={styles.parentView}>
          <View style={styles.title}>
            <Image
              style={styles.leftArrow}
              source={require('../images/left_arrow.png')}
            />
            <Text style={{ fontSize: 22, color: 'black', paddingLeft: 5 }}>Registration Details</Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Company Name</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Contact Person</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Contact Phone</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Contact Email</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Website (Optional)</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Year of Establishment</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Commodities/Areas of Interest</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
          </View>
          <TouchableHighlight style={styles.submitBtn} onPress={() => alert("hello")}>
            <Text style={styles.btnText}>CONTINUE</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  outer: {
    flex: 1,//Applying only for SafeAreaView--Full Screen Height
    width: '100%',
    backgroundColor: '#FFBF00',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  parentView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  leftArrow: {
    width: 23,
    height: 18,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    fontSize: 16,
    color: 'black',
    marginTop: 7,
    marginBottom: 7,
    height: 50,
    paddingLeft: 10
  },
  label: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 2
  },
  submitBtn: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Button: {
    width: '100%',
    height: '10%',
    marginTop: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: "500",
    color: 'white'
  },
  phoneInput: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 2,
    padding: 16
  },
});

export default Register;
