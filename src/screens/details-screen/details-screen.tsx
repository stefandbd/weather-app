import {AppRoute} from '@navigation/app-routes';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@types/Routing';
import React from 'react';

import {ActivityIndicator, Image} from 'react-native';
import {
  ErrorText,
  InfoText,
  InfoTextBold,
  InnerContainer,
  MainContainer,
} from './details-screen.style';
import useGetAlert from '@httpclient/queries/useGetAlert';
import CollapsibleView from '@components/collapsible/collapsible';
import {formatDate} from '@utils/formatDate';
import {CenteredContainer} from '@theming/commonStyles';
import Draggable from '@components/draggable/draggable';

type DetailsScreenProps = {
  id: number;
  name: string;
};

const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, AppRoute.DetailsScreen>>();
  const {isError, data, isFetching} = useGetAlert(route?.params?.id ?? '');
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
        <ErrorText>Something went wrong!</ErrorText>
      </MainContainer>
    );
  }

  // the period (the start date - the end date)
  // the severity
  // the certainty
  // the urgency
  // the source
  // the description
  // the names of the affected zones (& whether or not they are a “radarStation”). You can see ids/URLs of the affected zones under the “ affectedZones” node
  // the instructions (BONUS: make the instructions and description text to contain only 2 lines and expand if you click on the text itself)

  return (
    <MainContainer contentContainerStyle={{paddingBottom: 64}}>
      <InnerContainer>
        <Draggable>
          <Image
            source={{uri: route?.params?.imageUrl ?? ''}}
            style={{width: 64, height: 64, marginBottom: 32}}
            borderRadius={12}
          />
        </Draggable>
        <InfoText>
          <InfoTextBold>Starts:</InfoTextBold>{' '}
          {formatDate(data?.properties.effective ?? '')}
        </InfoText>
        <InfoText>
          <InfoTextBold>Ends:</InfoTextBold>{' '}
          {formatDate(data?.properties.ends ?? '')}
        </InfoText>
        <InfoText>
          <InfoTextBold>Certainty:</InfoTextBold> {data?.properties.certainty}
        </InfoText>
        <InfoText>
          <InfoTextBold>Urgency:</InfoTextBold> {data?.properties.urgency}
        </InfoText>
        <InfoText>
          <InfoTextBold>Source:</InfoTextBold> {data?.properties.senderName}
        </InfoText>
        <InfoTextBold style={{marginTop: 24}}>Description:</InfoTextBold>
        <CollapsibleView title={data?.properties.description ?? ''}>
          <InfoText>{data?.properties.description}</InfoText>
        </CollapsibleView>
        <InfoTextBold style={{marginTop: 24}}>Instruction:</InfoTextBold>
        <CollapsibleView title={data?.properties.instruction ?? ''}>
          <InfoText>{data?.properties.instruction}</InfoText>
        </CollapsibleView>
        <InfoTextBold style={{marginTop: 24}}>Affected Zones:</InfoTextBold>
        {data?.namesOfAffectedZones?.map(item => {
          return <InfoText key={item.id}>{item.name}</InfoText>;
        })}
      </InnerContainer>
    </MainContainer>
  );
};

export default DetailsScreen;
