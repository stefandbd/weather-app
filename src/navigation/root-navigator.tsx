import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppRoute} from './app-routes';
import {RootStackParamList} from 'src/types/Routing';
import {flex1} from '@theming/Constants';
import HomeScreen from '../screens/home-screen/home-screen';
import DetailsScreen from '../screens/details-screen/details-screen';
import {Colors} from '@theming/Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const stackOptions = useMemo(
    () => ({
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.blue,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        color: Colors.white,
      },
      title: 'Home',
    }),
    [],
  );

  useEffect(() => {
    const init = async () => {
      // Perform other tasks here
    };
    init().finally(async () => {});
  }, []);

  return (
    <SafeAreaView edges={['right', 'left']} style={flex1}>
      <Stack.Navigator
        initialRouteName={AppRoute.HomeScreen}
        screenOptions={stackOptions}>
        <Stack.Screen name={AppRoute.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={AppRoute.DetailsScreen}
          component={DetailsScreen}
          options={({route}) => ({title: route?.params?.name})}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
