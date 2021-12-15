import React,{useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const TouchablePractice = () =>{
    const [email,Setname] = useState('');
    const [password,Setemail] = useState('');

    const onPressAlert = () => {
        alert('Email : ' + email + '\nPassword : ' + password)
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "Email"
                    onChangeText = {(email) => {Setname(email)}}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "Password"
                    onChangeText = {(password) => {Setemail(password)}}
                />
                <TouchableOpacity 
                    style = {styles.buttonStyle}
                    onPress = {onPressAlert}
                >
                    <Text style = {styles.textStyle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15
    },
    buttonStyle: {
        backgroundColor: '#dc4e41',
        marginTop: 10,
        padding : 10
    },
    textStyle: {
        color: '#ffffff'
    }
});

export default TouchablePractice;