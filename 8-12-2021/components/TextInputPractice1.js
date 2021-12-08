import React,{useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TextInput
} from 'react-native';

const TextInputPractice1 = () =>{
    const [name,Setname] = useState('');
    const [email,Setemail] = useState('');

    const checkEmpty = () => {
        if(!name.trim()){
            alert("Please Enter Your Name !!");
        }
        else if(!email.trim()){
            alert("Please Enter Your Email !!")
        }
        else
        {
            alert("Success")
        }
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "enter your name"
                    onChangeText = {(name) => {Setname(name)}}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder = "enter your email"
                    onChangeText = {(email) => {Setemail(email)}}
                />
                <View style = {styles.buttonStyle}>
                    <Button
                        onPress = {checkEmpty}
                        title = 'submit'  
                    />
                </View>
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
        marginTop: 10,
    }
});

export default TextInputPractice1;