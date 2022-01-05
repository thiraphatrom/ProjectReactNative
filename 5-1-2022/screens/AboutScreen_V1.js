import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>เกี่ยวกับ</Text>
            <Button 
                title = 'Go to AboutPage again...'
                onPress = {() => navigation.push('About')}
            />
            <Button
                title = 'Go to HomePage'
                onPress = {() => navigation.navigate('Home')}
            />
            <Button
                title = 'Go back'
                onPress = {() => navigation.goBack()}
            />
            <Button
                title = 'Go back to first screen in stack'
                onPress = {() => navigation.popToTop()}
            />
        </View>
    )
}

//เปลี่ยน export ด้วย
export default AboutScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
