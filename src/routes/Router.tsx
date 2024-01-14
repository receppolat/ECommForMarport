import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PAGE_LIST} from '../pages/PageList';
import {navigationRef} from './helper';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {PAGE_LIST.map(page => (
            <Stack.Screen {...page} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Router;
