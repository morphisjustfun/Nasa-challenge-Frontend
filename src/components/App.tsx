/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useUserStore} from '../context/user.store';
import {appStyles} from '../styles/appStyles';
import TextLato from '../utils/components/textLato';

const App = () => {
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
        <TextLato typography="Lato-Regular" text="COVID Tracker" style={appStyles.textStyles.subtitleText}/>
        <TextLato typography="Lato-Light" text="Por Eating the Frog" style={appStyles.textStyles.aboutText}/>
      </View>
    </View>
  );
};

export default App;
