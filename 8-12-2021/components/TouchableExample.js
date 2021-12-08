import React,{useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const TouchableExample = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity 
                    style = {styles.buttonFacebookStyle}
                >
                    <Image
                        source = {require('../images/facebook.png')}
                        style = {styles.buttonImageIconStyle}
                    />
                    <View style = {styles.buttonIconSeparatorStyle}/>
                    <Text style = {styles.buttonTextStyle}>Login Using Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.buttonGPlusStyle}
                >
                    <Image
                        source = {require('../images/google-plus.png')}
                        style = {styles.buttonImageIconStyle}
                    />
                    <View style = {styles.buttonIconSeparatorStyle}/>
                    <Text style = {styles.buttonTextStyle}>Login Google Plus</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#ffffff',
        height: 40,
        borderRadius: 5,
        margin: 5
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#ffffff',
        height: 40,
        borderRadius: 5,
        margin: 5
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch'
    },
    buttonTextStyle: {
        color: '#ffffff',
        marginBottom: 4,
        marginLeft: 10
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#ffffff',
        width: 1,
        height: 40
    }
});

export default TouchableExample;