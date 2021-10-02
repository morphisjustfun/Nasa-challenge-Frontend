import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useUserStore} from '../context/user.store';
import {appStyles} from '../styles/appStyles';
import TextLato from '../utils/components/textLato';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import pages from '../constants/pages';
import {mainRoot} from '../../index';

const App: NavigationFunctionComponent = props => {
  useEffect(() => {
    setTimeout(() => {
      Navigation.setRoot(mainRoot);
    }, 2000);
  }, []);
  return (
    <View style={appStyles.containerStyles.root}>
      <View style={appStyles.containerStyles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View style={appStyles.containerStyles.welcomeContainer}>
        <TextLato
          typography="Lato-Bold"
          text="Calculando el riesgo..."
          style={appStyles.textStyles.welcomeText}
        />
      </View>
      <View style={appStyles.containerStyles.subtitleContainer}>
        <TextLato
          typography="Lato-Regular"
          text="COVID Tracker"
          style={appStyles.textStyles.subtitleText}
        />
        <TextLato
          typography="Lato-Light"
          text="Por Eating the Frog"
          style={appStyles.textStyles.aboutText}
        />
      </View>
    </View>
  );
};

export default App;
