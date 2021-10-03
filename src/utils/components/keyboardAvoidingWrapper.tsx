import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollViewComponent,
} from 'react-native';
import {FunctionComponent} from 'react';

const KeyboardAvoidingWrapper: FunctionComponent = props => {
  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
