import React, {useState, useEffect} from 'react';
import {View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {welcomeStyles} from '../styles/welcomeStyles';
import TextLato from '../utils/components/textLato';
import {colors} from '../constants/theme';
import {useUserStore} from '../context/user.store';
import RNLocation, {Location, Subscription} from 'react-native-location';
import {getLastLocation, geoDecode} from '../utils/utils';
import pages from '../constants/pages';

const WelcomePage: NavigationFunctionComponent = props => {
  const {user, setUser} = useUserStore();
  const [geoPermission, setGeoPermission] = useState(false);

  const getLocationCallBack = async (locations: Location[]) => {
    const lastLocation = getLastLocation(locations);
    const address = await geoDecode(
      lastLocation.latitude,
      lastLocation.longitude,
    );
    const region = address.address?.region;
    if (region === undefined || region === '') {
      setUser({...user, location: 'No definido'});
    } else if (region !== user.location) {
      setUser({...user, location: address.address?.region!});
    }
  };

  useEffect(() => {
    let subscription: Subscription;
    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    }).then(() => {
      RNLocation.getCurrentPermission().then(currentPermission => {
        if (currentPermission.startsWith('authorized')) {
          setGeoPermission(true);
          subscription =
            RNLocation.subscribeToLocationUpdates(getLocationCallBack);
          return subscription;
        }
        RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'coarse',
          },
        }).then(granted => {
          setGeoPermission(granted);
          if (granted) {
            subscription =
              RNLocation.subscribeToLocationUpdates(getLocationCallBack);
            return subscription;
          }
        });
      });
    });
  }, []);

  return (
    <View style={welcomeStyles.containerStyles.root}>
      <View style={{flex: 0.04}} />
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
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: pages.PRE_REGISTRATION_PAGE,
              },
            });
          }}>
          <TextLato text="EMPEZAR" typography="Lato-Regular" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
