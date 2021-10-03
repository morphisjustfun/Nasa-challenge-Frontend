import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {preRegistrationStyles} from '../styles/preRegistrationStyles';
import TextLato from '../utils/components/textLato';
import pages from '../constants/pages';

const PreRegistrationPage: NavigationFunctionComponent = props => {
  return (
    <View style={preRegistrationStyles.containerStyles.root}>
      <View style={preRegistrationStyles.containerStyles.titleContainer}>
        <TextLato
          text="Hola, para empezar queremos saber algunos factores de riesgo"
          typography="Lato-Regular"
          style={preRegistrationStyles.textStyles.titleText}
        />
        <TextLato
          text="Por favor, responde las siguientes preguntas"
          typography="Lato-Regular"
          style={preRegistrationStyles.textStyles.subTitleText}
        />
      </View>
      <View style={preRegistrationStyles.containerStyles.logoContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: pages.REGISTRATION_PAGE,
              },
            });
          }}>
          <Image source={require('../assets/images/preRegistrationLogo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreRegistrationPage;
