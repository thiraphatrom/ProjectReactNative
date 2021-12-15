import React from 'react'
import { View, Text } from 'react-native'

const Logo = () => {
    // funtion ต้องเขียนนอก Return
    const title = "TNI"
    const isTitle = true;

    const showData = ()=> <Text>Hello December</Text> //function

    return (
        <View>
            <Text style={{color:'blue', fontSize:20}}>Thai-Nichi</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle===true //กำหนดเงื่อนไข
                ?<Text>{title}</Text> //ถ้าเงื่อนไขเป็นจริง
                :<Text>Thai-Nichi</Text> //ถ้าเงื่อนไขเป็นเท็จ
            }
            {
                showData()
            }
            {/* <Text>{title}</Text> */}
        </View>
    )
}

export default Logo
