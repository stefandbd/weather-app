import {Colors} from '@theming/Colors';
import Sizes from '@theming/Sizes';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  padding: 16px;
`;

export const BgImage = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  margin-top: 20px;
  margin-bottom: -30px;
`;

export const UsernameText = styled.Text`
  color: ${Colors.primary};
  font-size: 14px;
  font-weight: 500;
`;

export const PhoneText = styled.Text`
  color: ${Colors.primary};
  font-size: 12px;
  font-weight: 500;
`;

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${Sizes.gutterSize * 2}px;
`;

export const HeaderText = styled.Text`
  color: ${Colors.darkGreen};
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorText = styled.Text`
  color: ${Colors.red};
  font-size: 14px;
  font-weight: 500;
`;
