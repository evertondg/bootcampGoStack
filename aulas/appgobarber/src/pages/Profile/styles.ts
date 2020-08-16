import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;

  padding: 110px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const BackToSignText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;

  align-self: center;
`;
export const UserAvatarButton = styled.TouchableOpacity``;

export const BackButtonOnPress = styled.TouchableOpacity`
  margin-top: 64px;
`;
