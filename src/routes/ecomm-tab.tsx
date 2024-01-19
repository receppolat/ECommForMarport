// React and React Native
import React from 'react';

// 3th Party
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Pages
import {NType, PAGE_LIST} from '../pages/PageList';

// Components
import {Header, TabBar} from '../components';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const ECommTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      {Object.values(PAGE_LIST).map(page => {
        if (page.type === NType.TAB)
          return (
            <Tab.Screen
              {...{...page}}
              options={{
                header: props => <Header {...props} />,
              }}
            />
          );
      })}
    </Tab.Navigator>
  );
};

export default ECommTabNavigation;
