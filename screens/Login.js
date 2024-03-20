import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Formik } from 'formik';
import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from '../components/styles.js';
import { View } from 'react-native';

const { darkLight, brand, primary } = Colors;
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo source={require('./../assets/img/ML_TECH_hor.png')} />
          <PageTitle>Net Zero Connect</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Welcome");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  icon="mail"
                />
                <MyTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Fontisto name="google" size={25} color={primary} style={{ marginRight: 10 }} />
    <ButtonText google={true}>Sign in with Google</ButtonText>
  </View>
</StyledButton>

<ExtraView style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <ExtraText style={{ textAlign: 'center' }}>Don't have an account already? </ExtraText>
</ExtraView>
<ExtraView style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <TextLink onPress={() => navigation.navigate('Signup')}>
    <TextLinkContent>Individual Signup</TextLinkContent>
  </TextLink>
</ExtraView>
<ExtraView style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <TextLink onPress={() => navigation.navigate('CompanySignup')}>
    <TextLinkContent>Company Signup</TextLinkContent>
  </TextLink>
</ExtraView>

              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
