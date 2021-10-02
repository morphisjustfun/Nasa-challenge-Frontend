import React from 'react';
import {useUserStore} from '../../context/user.store';
import {Text, StyleSheet, TextStyle} from 'react-native';

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
    text: string
}

const TextLato = (props: TextLatoProps) => {
  const {language} = useUserStore();
  return <Text style={{fontFamily: props.typography,...props.style}}>{props.text}</Text>;
};

export default TextLato;
