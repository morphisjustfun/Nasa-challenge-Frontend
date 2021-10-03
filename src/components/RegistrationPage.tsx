import React, {useState} from 'react';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {registrationStyles} from '../styles/registrationStyles';
import TextLato from '../utils/components/textLato';
import TextInputLato from '../utils/components/textInputLato';
import {colors} from '../constants/theme';
import {useUserStore} from '../context/user.store';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import KeyboardAvoidingWrapper from '../utils/components/keyboardAvoidingWrapper';
import Customdropdown from '../utils/components/customDropdown';
import {STATES} from '../constants/states';
import pages from '../constants/pages';

const getTruth = (value: any, reverse: boolean) => {
  return value === undefined ? false : reverse ? !value : value;
};

const RegionstrationPage: NavigationFunctionComponent = props => {
  const {user, setUser} = useUserStore();

  const [dropOpen, setDropOpen] = useState(false);
  const [dropBrandOpen, setDropBrandOpen] = useState(false);
  const [dropStateOpen, setDropStateOpen] = useState(false);

  const [name, setName] = useState('');
  const [covid, setCovid] = useState<undefined | boolean>(undefined);
  const [doses, setDoses] = useState<'Escoge un valor' | 0 | 1 | 2>(
    'Escoge un valor',
  );
  const [brand, setBrand] = useState('');

  const [state, setState] = useState(user.location);

  const setTruth = (source: 'yes' | 'no') => {
    source === 'yes' ? setCovid(false) : setCovid(true);
  };

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
              textAlign: 'center',
            }}
          />
          <TextLato
            text="¿Has tenido COVID antes?"
            typography="Lato-Regular"
            style={registrationStyles.textStyles.formText}
          />
          <View style={registrationStyles.containerStyles.checkBoxContainer}>
            <View
              style={
                registrationStyles.containerStyles.checkBoxContainerElementLeft
              }>
              <BouncyCheckbox
                size={22}
                fillColor={colors.buttonPrimary}
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: colors.trueBlack}}
                onPress={() => {
                  setTruth('yes');
                }}
                isChecked={getTruth(covid, true)}
                disableBuiltInState
              />
              <TextLato
                text="Sí"
                typography="Lato-Regular"
                style={registrationStyles.textStyles.formTextCheckbox}
              />
            </View>
            <View
              style={
                registrationStyles.containerStyles.checkBoxContainerElementRight
              }>
              <BouncyCheckbox
                size={22}
                fillColor={colors.buttonPrimary}
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: colors.trueBlack}}
                onPress={() => {
                  setTruth('no');
                }}
                isChecked={getTruth(covid, false)}
                disableBuiltInState
              />
              <TextLato
                text="No"
                typography="Lato-Regular"
                style={registrationStyles.textStyles.formTextCheckbox}
              />
            </View>
          </View>
          <TextLato
            text="¿Cuántas dosis de vacunas has recibido?"
            typography="Lato-Regular"
            style={registrationStyles.textStyles.formText}
          />
          {/* <TextInputLato */}
          {/*   typography="Lato-Regular" */}
          {/*   props={{ */}
          {/*     placeholder: 'Escribe tu nombre', */}
          {/*     placeholderTextColor: colors.blackPlaceholder, */}
          {/*     value: name, */}
          {/*     onChangeText: setName, */}
          {/*     style: registrationStyles.textStyles.inputText, */}
          {/*     textAlign: 'center', */}
          {/*   }} */}
          {/* /> */}
          <View style={registrationStyles.textStyles.pickerElement}>
            <Customdropdown
              open={dropOpen}
              setOpen={setDropOpen}
              items={[
                {label: '0', value: 0},
                {label: '1', value: 1},
                {label: '2', value: 2},
              ]}
              value={doses}
              setValue={setDoses}
              typography="Lato-Regular"
              placeholder="Selecciona una opción"
              style={{
                ...registrationStyles.textStyles.dropdownElement,
                marginBottom: dropOpen ? 120 : 0,
              }}
              onOpen={() => setDropBrandOpen(false)}
              listMode="SCROLLVIEW"
            />
          </View>
          <TextLato
            text="¿Qué marca de vacuna recibiste?"
            typography="Lato-Regular"
            style={registrationStyles.textStyles.formText}
          />
          <View style={registrationStyles.textStyles.pickerElement}>
            <Customdropdown
              open={dropBrandOpen}
              setOpen={setDropBrandOpen}
              items={[
                {label: 'Pfizer', value: 'PFIZER'},
                {label: 'Astrazeneca', value: 'ASTRAZENECA'},
                {label: 'Sinopharm', value: 'SINOPHARM'},
                {label: 'No recuerdo', value: ''},
              ]}
              value={brand}
              setValue={setBrand}
              typography="Lato-Regular"
              placeholder="Selecciona una opción"
              style={{
                ...registrationStyles.textStyles.dropdownElement,
                marginBottom: dropBrandOpen ? 160 : 0,
                backgroundColor:
                  doses === 0
                    ? colors.blackPlaceholder
                    : colors.backgroundColor,
              }}
              disabled={doses === 0}
              onOpen={() => setDropOpen(false)}
              listMode="SCROLLVIEW"
            />
          </View>
          <TextLato
            text="¿Dónde te encuentras?"
            typography="Lato-Regular"
            style={registrationStyles.textStyles.formText}
          />
          <View style={registrationStyles.textStyles.pickerElement}>
            <Customdropdown
              open={dropStateOpen}
              setOpen={setDropStateOpen}
              items={STATES.map(value => {
                return {label: value, value: value};
              })}
              value={state}
              setValue={setState}
              typography="Lato-Regular"
              placeholder={state}
              style={{
                ...registrationStyles.textStyles.dropdownElement
              }}
              onOpen={() => setDropOpen(false)}
              listMode="MODAL"
            />
          </View>
          <TouchableOpacity
            style={registrationStyles.textStyles.buttonTitle}
            onPress={() => {
              if (
                name === '' ||
                covid === undefined ||
                doses === 'Escoge un valor'
              ) {
                Alert.alert('Error', 'Datos faltantes');
              } else {
                if (brand === '' || brand === 'No recuerdo') {
                  setUser({
                    ...user,
                    name: name,
                    location: state,
                    covidBefore: covid,
                    brandVaccine: 'No definido',
                    dosesVaccine: doses,
                  });
                } else {
                  setUser({
                    ...user,
                    name: name,
                    location: state,
                    covidBefore: covid,
                    // @ts-ignore
                    brandVaccine: brand,
                    dosesVaccine: doses,
                  });
                }
                Navigation.push(props.componentId, {
                  component: {
                    name: pages.RISK_PAGE,
                  },
                });
              }
            }}>
            <TextLato text="LISTO" typography="Lato-Regular" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default RegionstrationPage;
