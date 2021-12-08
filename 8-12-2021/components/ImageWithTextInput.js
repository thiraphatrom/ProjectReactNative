import React from "react";
//import all use component
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Image 
} from 'react-native';

const ImageWithTextInput = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.sectionStyle}>
                <Image style={styles.imageStyle} source = {require('../images/input_username.png')}/>
                <TextInput 
                    style = {{flex:1}}
                    placeholder = "Enter Your Name Here"
                    underlineColorAndroid = "transparent"
                />
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.imageStyle} source = {require('../images/input_phone.png')}/>
                <TextInput 
                    style = {{flex:1}}
                    placeholder = "Enter Your Mobile No Here"
                    underlineColorAndroid = "transparent"
                />
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: '#000000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    }
});

export default ImageWithTextInput;