import {AppRoute} from '@navigation/app-routes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@types/Routing';
import React from 'react';
import {View, Image} from 'react-native';
import {
  NameText,
  IntervalText,
  AlertBox,
  AlertNameText,
  IntervalBox,
  IntervalContainer,
  IntervalInnerContainer,
  IntervalTitleText,
  BgImage,
} from './alert-item.style';
import {formatDate} from '@utils/formatDate';
import {AlertI} from '@httpclient/queries/useGetWeather';

const AlertItem: React.FC<{item: AlertI; testID: string}> = ({
  item,
  testID,
}) => {
  const {properties, imageUrl} = item;
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, AppRoute.HomeScreen>
    >();
  return (
    <View testID={testID} style={{marginTop: 16}}>
      {/* <BgImage
        source={{uri: imageUrl ? imageUrl : undefined}}
        borderRadius={12}> */}
      <Image
        source={{uri: imageUrl ? imageUrl : undefined}}
        borderRadius={12}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <AlertBox
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(AppRoute.DetailsScreen, {
            id: properties.id,
            imageUrl: imageUrl ?? '',
          })
        }>
        <NameText>{properties.event}</NameText>
        <AlertNameText>Sender: {properties.senderName}</AlertNameText>
        <IntervalContainer>
          <IntervalTitleText>Interval</IntervalTitleText>
          <IntervalInnerContainer>
            <IntervalBox type="start">
              <IntervalText>{formatDate(properties.effective)}</IntervalText>
            </IntervalBox>
            <IntervalBox type="end">
              <IntervalText>{formatDate(properties.ends)}</IntervalText>
            </IntervalBox>
          </IntervalInnerContainer>
        </IntervalContainer>
      </AlertBox>

      {/* </BgImage> */}
    </View>
  );
};

export default AlertItem;
