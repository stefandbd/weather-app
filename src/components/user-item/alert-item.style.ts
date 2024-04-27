import {Colors} from '@theming/Colors';
import Sizes from '@theming/Sizes';
import styled from 'styled-components/native';

type IntervalColor = {
  type: string;
};

export const AlertBox = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.35);
  padding: 16px;
  border-radius: 10px;
`;

export const NameText = styled.Text`
  color: ${Colors.white};
  font-size: ${Sizes.gutterSize * 2}px;
  font-weight: 700;
`;

export const BgImage = styled.ImageBackground`
  resize-mode: cover;
  margin-bottom: 20px;
  height: 128px;
`;

export const AlertNameText = styled.Text`
  color: ${Colors.whiteish};
  font-size: 12px;
  font-weight: 500;
`;

export const IntervalContainer = styled.View``;

export const IntervalInnerContainer = styled.View`
  flex-direction: row;
  margin-top: ${Sizes.gutterSize}px;
`;

export const IntervalBox = styled.View<IntervalColor>`
  border-radius: ${Sizes.gutterSize * 2}px;
  background-color: ${props =>
    props.type === 'start' ? 'rgba(255,0,0,0.5)' : 'rgba(60, 179, 113,0.5)'};
  padding: ${Sizes.gutterSize}px;
  margin-left: ${Sizes.gutterSize}px;
`;

export const IntervalTitleText = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  font-weight: 800;
  margin-top: ${Sizes.gutterSize}px;
`;

export const IntervalText = styled.Text`
  color: ${Colors.whiteish};
  font-size: 12px;
  font-weight: 500;
`;
