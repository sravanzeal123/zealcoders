import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import NewsList from './src/Screens/NewsList';
import ImagePickerExample from './src/Screens/ImagePickerExample';

const App = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='NewsList' component={NewsList}/>
        <Stack.Screen name='ImagePickerExample' component={ImagePickerExample}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
