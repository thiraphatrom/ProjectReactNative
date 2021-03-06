import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Footer = () => {

    const users = [
        {id:1, name:'John'},
        {id:2, name:'Mary'}
    ]

    const [count, setCount] = useState(0); //const counr = 0
    const [title, setTitle] = useState('Hello')

    //update always if re-render
    useEffect (()=>{
        console.log('use effect1')
    })

    //ทำงานแค่รอบเดียว เช่น การเรียกข้อมูลจาก Backend
    useEffect (()=>{
        console.log('use effect2')
    },[])

    //จะทำเมื่อตัวแปรใน [] มีการเปลี่ยนแปลง
    useEffect (()=>{
        console.log('use effect3')
    },[title])

    return (
        <View>
            <Text style = {styles.title}>Thai-Nichi Institute of Technology {count}</Text>
            {
                users.map((user, index)=>{
                    return <Text key = {user.id}>{index+1} {user.name}</Text>
                })
            }
            <Button 
                title='Click Me'
                onPress={ ()=>{
                    // setCount(5) //update ค่า count
                    setCount(count+1)
                }}
            />
            
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
    }
})
