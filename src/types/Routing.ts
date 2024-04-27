// import {NavigatorScreenParams} from '@react-navigation/native';
// [AppRoute.DrawerStack]: NavigatorScreenParams<DrawerNavigatorParamsList>;

import {AppRoute} from '../navigation/app-routes';

export type RootStackParamList = {
  [AppRoute.HomeScreen]: undefined;
  [AppRoute.DetailsScreen]: {id: string; imageUrl: string};
};
