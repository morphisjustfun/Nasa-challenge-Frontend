import React from 'react';
import {useUserStore} from '../../context/user.store';
import {
  Text,
  StyleSheet,
  TextStyle,
  TextInput,
  TextInputProps,
} from 'react-native';

interface TextLatoProps {
  style?: TextStyle;
  typography:
    | 'Lato-Black'
    | 'Lato-BlackItalic'
    | 'Lato-Bold'
    | 'Lato-BoldItalic'
    | 'Lato-Italic'
    | 'Lato-Light'
    | 'Lato-LightItalic'
    | 'Lato-Regular'
    | 'Lato-Thin'
    | 'Lato-ThinItalic';
  props: TextInputProps;
}

const TextInputLato = (props: TextLatoProps) => {
  // @ts-ignore
  let oldStyle = {...props.props.style};
  oldStyle.fontFamily = props.typography;
  return <TextInput {...props.props} style={oldStyle}/>;
};

export default TextInputLato;
