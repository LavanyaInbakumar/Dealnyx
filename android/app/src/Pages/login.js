import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

const Login = () => {
    const [phoneValue, setPhoneValue] = useState(null)
    const [isValidNumber, setIsValidNumber] = useState(false)
    const phoneRef = useRef(undefined);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <SafeAreaView style={styles.outer}>
            <StatusBar barStyle='light-content' backgroundColor='#FFBF00' hidden={true} />
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Image source={require('../images/mobile.png')} style={styles.mobile} />
                    <Text style={styles.Text}>Login/SignUp</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <PhoneInput
                        containerStyle={styles.phoneInput}
                        ref={phoneRef}
                        onChangePhoneNumber={value => {
                            setPhoneValue(value);
                            setIsValidNumber(phoneRef.current.isValidNumber())
                            withShadow = true
                        }}
                    />
                    {/* <Input
                        placeholder='INPUT WITH CUSTOM ICON'
                        leftIcon={
                            <Icon
                                name='fa-solid fa-mobile-screen'
                                size={24}
                                color='black'
                            />
                        }
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
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30, position: 'absolute', bottom: 0, padding: 10 }}>
                    <Text style={styles.terms}>By signing up, you agree to Dealynx’s <Text style={styles.span}>{"Terms & Conditions"}</Text></Text>
                    <Text style={styles.terms}>and <Text style={styles.span}>{"Privacy Policy"}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    outer: {
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 30,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        paddingTop: 20,
        position: 'relative',
    },
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
        margin: 10
    }
})
export default Login;