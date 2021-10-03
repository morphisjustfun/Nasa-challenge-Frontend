import React, {useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {registrationStyles} from '../styles/registrationStyles';
import TextLato from '../utils/components/textLato';
import TextInputLato from '../utils/components/textInputLato';
import {colors} from '../constants/theme';
import {useUserStore} from '../context/user.store';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import KeyboardAvoidingWrapper from '../utils/components/keyboardAvoidingWrapper';

const RegionstrationPage: NavigationFunctionComponent = () => {
  const {user, setUser} = useUserStore();
  const [name, setName] = useState('');

  return (
  <KeyboardAvoidingWrapper>
    <View style={registrationStyles.containerStyles.root}>
      <View style={registrationStyles.containerStyles.rootContent}>
        <TextLato
          text="¿Cómo quisieras que te llamemos?"
          typography="Lato-Regular"
          style={registrationStyles.textStyles.formText}
        />
        <TextInputLato
          typography="Lato-Regular"
          props={{
            placeholder: 'Escribe tu nombre',
            placeholderTextColor: colors.blackPlaceholder,
            value: name,
            onChangeText: setName,
            style: registrationStyles.textStyles.inputText,
          }}
        />
        <TextLato
          text="¿Has tenido COVID antes?"
          typography="Lato-Regular"
          style={registrationStyles.textStyles.formText}
        />
        <View style={registrationStyles.containerStyles.checkBoxContainer}>
          <View
            style={registrationStyles.containerStyles.checkBoxContainerElementLeft}>
            <BouncyCheckbox
              size={22}
              fillColor={colors.buttonPrimary}
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: colors.trueBlack}}
              onPress={(isChecked: boolean | undefined) => {}}
            />
            <TextLato
              text="Sí"
              typography="Lato-Regular"
              style={registrationStyles.textStyles.formTextCheckbox}
            />
          </View>
          <View
            style={registrationStyles.containerStyles.checkBoxContainerElementRight}>
            <BouncyCheckbox
              size={22}
              fillColor={colors.buttonPrimary}
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: colors.trueBlack}}
              onPress={(isChecked: boolean | undefined) => {}}
            />
            <TextLato
              text="No"
              typography="Lato-Regular"
              style={registrationStyles.textStyles.formTextCheckbox}
            />
          </View>
        </View>
        <TextLato
          text="¿Cuantas dosis de vacunas has recibido?"
          typography="Lato-Regular"
          style={registrationStyles.textStyles.formText}
        />
        <TextInputLato
          typography="Lato-Regular"
          props={{
            placeholder: 'Escribe tu nombre',
            placeholderTextColor: colors.blackPlaceholder,
            value: name,
            onChangeText: setName,
            style: registrationStyles.textStyles.inputText,
          }}
        />
        <TextLato
          text="¿Qué marca de vacuna recibiste?"
          typography="Lato-Regular"
          style={registrationStyles.textStyles.formText}
        />
        <TextInputLato
          typography="Lato-Regular"
          props={{
            placeholder: 'Escribe tu nombre',
            placeholderTextColor: colors.blackPlaceholder,
            value: name,
            onChangeText: setName,
            style: registrationStyles.textStyles.inputText,
          }}
        />
        <TextLato
          text="¿Dónde te encuentras?"
          typography="Lato-Regular"
          style={registrationStyles.textStyles.formText}
        />
        <TextInputLato
          typography="Lato-Regular"
          props={{
            placeholder: user.location,
            placeholderTextColor: colors.blackPlaceholder,
            value: name,
            onChangeText: setName,
            style: {...registrationStyles.textStyles.inputText},
          }}
        />
        <TouchableOpacity
          style={registrationStyles.textStyles.buttonTitle}
          onPress={() => {}}>
          <TextLato text="LISTO" typography="Lato-Regular" />
        </TouchableOpacity>
      </View>
      </View>
  </KeyboardAvoidingWrapper>
  );
};

export default RegionstrationPage;
