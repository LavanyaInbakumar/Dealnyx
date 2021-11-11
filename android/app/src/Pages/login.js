import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons';
import { Input, Icon } from 'react-native-elements';
// import Icon from 'react-native-ico-font-awesome';


const Login = () => {
    const [phoneValue, setPhoneValue] = useState(null)
    const [isValidNumber, setIsValidNumber] = useState(false)
    const phoneRef = useRef(undefined);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [input, setInput] = useState('')
    const [items, setItems] = useState([

        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <SafeAreaView style={styles.outer}>
            <StatusBar barStyle='light-content' backgroundColor='#FFBF00' hidden={true} />
            <ScrollView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.loginContainer}>
                    <Image source={require('../images/mobile.png')} style={styles.mobile} />
                    <Text style={styles.Text}>Login/SignUp</Text>
                </View>
                <View style={styles.midContainer}>
                    <PhoneInput
                        containerStyle={styles.phoneInput}
                        ref={phoneRef}
                        onChangePhoneNumber={value => {
                            setPhoneValue(value);
                            setIsValidNumber(phoneRef.current.isValidNumber())
                            withShadow = true
                        }}
                    />
                    <View style={styles.inputContainer}>
                        <Image source={require("../images/mobile_icon.png")} style={styles.mobileIcon} />
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.textInput}
                            onChangeText={value => setValue(value)}
                        />

                    </View>
                    {/* <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                color='#517fa4'
                            />
                        }
                        containerStyle={styles.textInput}
                    /> */}
                    {/* <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    /> */}
                    <Text style={styles.Text_OTP}>Enter your mobile number to get veron OTP</Text>
                    <TouchableOpacity style={styles.submitBtn} onPress={() => alert("hello")}>
                        <Text style={styles.btnText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.termContainer}>
                    <Text style={styles.terms}>By signing up, you agree to Dealynx’s <Text style={styles.span}>{"Terms & Conditions"}</Text></Text>
                    <Text style={styles.terms}>and <Text style={styles.span}>{"Privacy Policy"}</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    outer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 30,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 20,
    },
    logoContainer: { width: '100%', justifyContent: 'center', alignItems: 'center' },
    loginContainer: { width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    midContainer: { width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    termContainer: { width: '100%', justifyContent: 'flex-end', alignItems: 'center', height: 120 },
    logo: {
        width: '100%',
        height: 60
    },
    mobile: {
        width: '20%',
        height: 80
    },
    Text: {
        fontSize: 25,
        color: '#2C3051',
        opacity: 0.5,
        padding: 10
    },
    Text_OTP: {
        width: '70%',
        fontSize: 15,
        color: '#2C3051',
        opacity: 0.5,
        padding: 15,
        textAlign: 'center'
    },
    submitBtn: {
        width: '100%',
        height: 60,
        borderRadius: 5,
        backgroundColor: '#FFBF00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: "500",
        color: 'white'
    },
    terms: {
        width: '100%',
        fontSize: 13,
        color: '#2C3051',
        textAlign: 'center'
    },
    span: {
        fontSize: 13,
        color: '#FFBF00',
        textDecorationLine: 'underline'
    },
    phoneInput: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        margin: 10,
        height: 70,
    },
    mobileIcon: {
        width: '10%',
        height: '50%',
        resizeMode: 'contain',
        marginLeft: 12
    },
    inputContainer: {
        width: '95%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        margin:10
    },
    textInput: {
        width: '86%',
        height: '80%',
        padding: 5,
        borderWidth: 0,
        fontSize: 18,
        alignContent: 'center',
        paddingLeft: 10
    }
})
export default Login;