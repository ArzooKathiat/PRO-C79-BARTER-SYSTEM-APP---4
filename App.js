import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {BottomTabNavigator} from './components/BottomNavigator';
import SignupLoginScreen from './screens/SignupLoginScreen'


export default function App() {
  return (
    <View style={styles.container}>
      
      <AppContainer/>

    </View>
  );
}






 const SwitchNavigator = createSwitchNavigator({
     SignupLoginScreen :SignupLoginScreen,
     BottomTabNavigator:BottomTabNavigator,

  
 })

 const AppContainer = createAppContainer(SwitchNavigator);

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
