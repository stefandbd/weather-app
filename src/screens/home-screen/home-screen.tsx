import {FlashList} from '@shopify/flash-list';
import React from 'react';

import {ActivityIndicator} from 'react-native';
import AlertItem from '@components/user-item/alert-item';
import {
  ErrorText,
  HeaderContainer,
  HeaderText,
  MainContainer,
} from './home-screen.style';
import useGetWeather, {AlertI} from '@httpclient/queries/useGetWeather';

import {CenteredContainer} from '@theming/commonStyles';

export type CatType = {
  id: string;
  name: string;
  origin: string;
  image: {
    width: number;
    height: number;
    id: string;
    url: string;
  };
  description: string;
  life_span: string;
  temperament: string;
  adaptability: number;
  child_friendly: number;
  stranger_friendly: number;
  wikipedia_url: string;
};

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>US weather alerts</HeaderText>
    </HeaderContainer>
  );
};

const HomeScreen: React.FC = () => {
  const {data: weatherData, isFetching, isError} = useGetWeather();

  if (isFetching) {
    return (
      <CenteredContainer>
        <ActivityIndicator
          size={'large'}
          color={'#4B328D'}
          testID="loading-indicator"
        />
      </CenteredContainer>
    );
  }
  if (isError) {
    return (
      <MainContainer>
        <ErrorText testID="errorMessage">Something went wrong!</ErrorText>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <FlashList
        data={weatherData ?? []}
        renderItem={({item, index}: {item: AlertI; index: number}) => (
          <AlertItem item={item} testID={`user-item-${index}`} />
        )}
        keyExtractor={item => item.properties.id}
        estimatedItemSize={190 * 15}
        refreshing={isFetching}
        ListHeaderComponent={<Header />}
        // onRefresh={loadMore}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          paddingTop: 24,
          padding: 16,
        }}
      />
    </MainContainer>
  );
};

export default HomeScreen;
