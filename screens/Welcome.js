import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
  Colors,
} from './../components/styles';

const Welcome = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
      <WelcomeImage
  resizeMode="cover"
  style={{ width: '50%', height: '40%' }}
  source={require('./../assets/img/truck2.jpg')}
/>

<WelcomeContainer>
<Avatar 
            resizeMode="contain" 
            source={require('./../assets/img/ML_TECH_hor.png')} />


          <StyledFormArea>
          <PageTitle style={{ paddingBottom: 50 }} welcome={true}>Welcome!</PageTitle>
  <SubTitle style={{ paddingBottom: 5 }} welcome={true}>Subtitle 1</SubTitle>
  <SubTitle style={{ paddingBottom: 5 }} welcome={true}>Subtitle 2</SubTitle>


            <Line />
            <StyledButton onPress={() => {navigation.navigate('Login');
          }}
          >
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;