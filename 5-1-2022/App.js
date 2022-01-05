import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='FirstPage'
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
          name="FirstPage" 
          component={FirstPage} 
          options={{title : 'FirstPage'}}
        />
        <Stack.Screen 
          name="SecondPage" 
          component={SecondPage} 
          options={{title : 'SecondPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
