import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useUserStore} from '../context/user.store';
import {riskStyles} from '../styles/riskStyles';
import HeaderRisk from '../utils/components/headerRisk';
import TextLato from '../utils/components/textLato';
import {getRisk} from '../utils/api';
import {colors} from '../constants/theme';
import {getFormattedRisk} from '../utils/utils';

const RiskPage = () => {
  const {user} = useUserStore();
  const [risk, setRisk] = useState<string | number>('Cargando...');

  useEffect(() => {
    (async () => {
      const result = await getRisk(
        user.location,
        // @ts-ignore
        user.dosesVaccine,
        user.covidBefore,
        user.brandVaccine,
      );
      const numericRisk = result.result!;
      let finalRisk = numericRisk > 7 ? 7 : numericRisk;
      setRisk(finalRisk);
    })();
  }, []);

  const riskProps = getFormattedRisk(risk);

  return (
    <View style={riskStyles.containerStyles.root}>
      <View
        style={{
          position: 'absolute',
          bottom: -80,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={require('../assets/images/riskBackground.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%', alignSelf: 'center'}}
        />
      </View>
      <HeaderRisk location={user.location} />
      <View style={riskStyles.containerStyles.titleContainer}>
        <TextLato
          text={`${user.name}, tu riesgo de COVID es:`}
          typography="Lato-Regular"
          style={riskStyles.textStyles.title}
        />
      </View>
      <View style={riskStyles.containerStyles.factorContainer}>
        <TextLato
          text={riskProps.label}
          typography="Lato-Italic"
          style={{
            color: riskProps.color,
            fontSize: typeof risk === 'string' ? 30 : 80,
            textAlign: 'center',
            marginBottom: 30
          }}
        />
        <View style={riskStyles.containerStyles.labelColorsContainer}>
        <TextLato
          text="Bajo"
          typography="Lato-Regular"
          style={riskStyles.textStyles.labelColor}
        />
        <Image
          source={require('../assets/images/riskColors.png')}
          resizeMode="contain"
        />
        <TextLato
          text="Alto"
          typography="Lato-Regular"
          style={riskStyles.textStyles.labelColor}
        />
        </View>
      </View>
    </View>
  );
};

export default RiskPage;
