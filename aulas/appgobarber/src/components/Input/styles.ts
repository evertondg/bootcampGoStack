import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ededed;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin: 0 10px;
`;
