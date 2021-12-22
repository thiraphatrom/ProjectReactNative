import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style = {styles.container}>
            <Text>เกี่ยวกับ</Text>
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
