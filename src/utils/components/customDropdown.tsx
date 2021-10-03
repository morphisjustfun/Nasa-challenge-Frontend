import DropDownPicker, {ItemType, ListModeType} from 'react-native-dropdown-picker';
import React, {
  FunctionComponent,
  Dispatch,
  useState,
  SetStateAction,
} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type typography =
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

interface customDropDownProps {
  items: ItemType[];
  value: any;
  setValue: Dispatch<any>;
  typography?: typography;
  textStyle?: StyleProp<TextStyle>;
  placeholder: string;
  style: StyleProp<ViewStyle>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  onOpen?: () => void
  listMode: ListModeType
}

const Customdropdown: FunctionComponent<customDropDownProps> = props => {
  return (
    <DropDownPicker
      open={props.open}
      setOpen={props.setOpen}
      value={props.value}
      setValue={props.setValue}
      items={props.items}
      listMode={props.listMode}
      style={props.style}
      // @ts-ignore
      textStyle={{...props.textStyle, fontFamily: props.typography, textAlign:'center'}}
      placeholder={props.placeholder}
      showTickIcon={false}
      showArrowIcon={false}
      dropDownContainerStyle={{
        borderWidth: 0,
        borderRadius: 20,
      }}
      placeholderStyle={{
        textAlign: 'center',
      }}
      listItemLabelStyle={{
        textAlign: 'center',
      }}
      disabled={props.disabled}
      onOpen={props.onOpen}
    />
  );
};

export default Customdropdown;
