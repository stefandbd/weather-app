import {Colors} from '@theming/Colors';
import Sizes from '@theming/Sizes';
import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  padding: ${Sizes.gutterSize * 2}px;
`;

export const InnerContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.TouchableOpacity`
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${Colors.whiteish};
`;

export const InfoText = styled.Text`
  color: ${Colors.primary};
  font-size: 14px;
  font-weight: 500;
`;

export const InfoTextBold = styled.Text`
  color: ${Colors.primary};
  font-size: 14px;
  font-weight: 700;
`;

export const NextText = styled.Text`
  color: ${Colors.primary};
  font-size: 12px;
  font-weight: 500;
`;

export const ErrorText = styled.Text`
  color: ${Colors.red};
  font-size: 14px;
  font-weight: 500;
`;
