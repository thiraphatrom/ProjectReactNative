import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //component = HomeScreem ต้องตรงกับชื่อไฟล์ JS
    //initialRouteName ให้หน้าแรกวิ่งไปที่หน้าไหน
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0096DA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title : 'หน้าหลัก'}}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{title : 'เกี่ยวกับ'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
