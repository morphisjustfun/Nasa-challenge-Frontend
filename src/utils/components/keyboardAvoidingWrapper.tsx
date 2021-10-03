import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollViewComponent,
} from 'react-native';
import {FunctionComponent} from 'react';
import {colors} from '../../constants/theme';

const KeyboardAvoidingWrapper: FunctionComponent = props => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: colors.backgroundAlternative}}
        contentContainerStyle={{flexGrow:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
