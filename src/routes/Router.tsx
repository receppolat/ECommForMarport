import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NType, PAGE_LIST} from '../pages/PageList';
import {navigationRef} from './helper';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{}} initialRouteName="ECommTab">
          {Object.values(PAGE_LIST).map(page => {
            if (page.type === NType.STACK)
              return <Stack.Screen {...{...page}} />;
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
