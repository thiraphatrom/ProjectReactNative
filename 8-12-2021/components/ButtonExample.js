import React from "react";
//import all use component
import {
  Text, 
  StyleSheet,
  SafeAreaView,
  View,
  Button,
} from 'react-native';

const ButtonExample = () => {
    const onPressAlert = () => {
        alert('Hello')
    }
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <Text>Button Example</Text>
                <Button
                    onPress = {onPressAlert}
                    title = "Click Me"
                    color = "#841584"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default ButtonExample;