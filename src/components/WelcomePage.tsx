import React from 'react';
import {View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {welcomeStyles} from '../styles/welcomeStyles';
import TextLato from '../utils/components/textLato';
import {colors} from '../constants/theme';

const WelcomePage: NavigationFunctionComponent = props => {
  return (
    <View style={welcomeStyles.containerStyles.root}>
    <View style={{flex:0.04}}/>
      <View style={welcomeStyles.containerStyles.topBarContainer}>
        <TextLato
          text="COVID"
          typography="Lato-Regular"
          style={welcomeStyles.textStyles.topBarTextRight}
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={welcomeStyles.imageStyles.topImage}
          resizeMode="contain"
        />
        <TextLato
          text="Tracker"
          typography="Lato-Regular"
          style={welcomeStyles.textStyles.topBarTextLeft}
        />
      </View>
      <View style={welcomeStyles.containerStyles.logoContainer}>
        <Image
          source={require('../assets/images/staySafe.png')}
          style={welcomeStyles.imageStyles.logoImage}
        />
      </View>
      <View style={welcomeStyles.containerStyles.textContainer}>
        <TextLato
          text="Prevee la COVID 19"
          typography="Lato-Regular"
          style={welcomeStyles.textStyles.subTitle}
        />
        <TextLato
          text="Calculando tu índice de riesgo"
          typography="Lato-Thin"
          style={welcomeStyles.textStyles.subSubTitle}
        />
      </View>
      <View style={welcomeStyles.containerStyles.buttonContainer}>
        <TouchableOpacity
          style={welcomeStyles.textStyles.buttonTitle}
          onPress={() => {}}>
          <TextLato text="EMPEZAR" typography="Lato-Regular" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
