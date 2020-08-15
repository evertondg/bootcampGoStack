import React, { useCallback } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Container>
        <Header>
          <HeaderTitle>
            Bem vindo,
            {'\n'}
            <UserName>{user.name}</UserName>
          </HeaderTitle>
          <ProfileButton
            onPress={() => {
              navigateToProfile();
            }}
          >
            <UserAvatar source={{ uri: user.avatar_url }} />
          </ProfileButton>
        </Header>
      </Container>
    </View>
  );
};

export default Dashboard;
