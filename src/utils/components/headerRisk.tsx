import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import TextLato from './textLato';
import {colors} from '../../constants/theme';

const styles = StyleSheet.create({
  root: {
    flex: 0.15,
  },
  background: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  backgroundLogo: {
    height: '65%',
    width: '65%',
    alignSelf: 'center',
  },
  titleHeader: {
    flex: 0.6,
    justifyContent: 'center',
  },
  locationHeader: {
    flex: 0.4,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    marginHorizontal: 20,
    marginBottom: 18,
    paddingHorizontal: 6,
  },
  textTitle: {
    textAlign: 'left',
    marginHorizontal: 20,
    fontSize: 16,
  },
  logoSector: {
    flex: 0.1,
    justifyContent: 'center',
  },
  textSector: {
    flex: 0.9,
    justifyContent: 'center',
    marginLeft: 10,
  },
  textTargetSector: {
    fontSize: 14,
  },
});

interface HeaderRiskProps {
  location: string;
}

const HeaderRisk: FunctionComponent<HeaderRiskProps> = props => {
  return (
    <View style={styles.root}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={require('../../assets/images/headerRisk.png')}
          resizeMode="cover"
          style={styles.background}
        />
      </View>
      <View style={styles.titleHeader}>
        <TextLato
          text="COVID tracker"
          typography="Lato-Regular"
          style={styles.textTitle}
        />
      </View>
      <View style={styles.locationHeader}>
        <View style={styles.logoSector}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.backgroundLogo}
          />
        </View>
        <View style={styles.textSector}>
          <TextLato
            text={props.location}
            typography="Lato-Regular"
            style={styles.textTargetSector}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderRisk;
