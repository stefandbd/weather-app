import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootNavigator from './root-navigator';
import HomeIcon from '@assets/icons/HomeIcon';
import Sizes from '@theming/Sizes';
import {Colors} from '@theming/Colors';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={'Home'}
        component={RootNavigator}
        options={{
          tabBarIcon: () => (
            <HomeIcon
              width={Sizes.gutterSize * 2.5}
              height={Sizes.gutterSize * 2.5}
            />
          ),
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            color: Colors.blue,
            fontWeight: '600',
            fontSize: Sizes.gutterSize * 1.5,
            marginTop: Sizes.gutterSize,
          },
          tabBarStyle: {
            paddingTop: Sizes.gutterSize * 2,
          },
        }}
      />
    </Tab.Navigator>
  );
}
