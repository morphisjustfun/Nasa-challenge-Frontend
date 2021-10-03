import {StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundAlternative,
    justifyContent: 'center',
    alignContent: 'center',
  },
  rootContent: {
    flex: 0.85,
  },
  checkBoxContainer: {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
  },
  checkBoxContainerElementLeft:{
     flex:0.34,
     borderTopLeftRadius: 10,
     borderBottomLeftRadius:10,
     flexDirection: 'row',
     justifyContent: 'flex-end',
     alignItems: 'center',
     backgroundColor: colors.backgroundColor,
     paddingVertical: 14,
     paddingRight:40
  },
  checkBoxContainerElementRight:{
     flex:0.34,
     borderTopRightRadius: 10,
     borderBottomRightRadius:10,
     flexDirection: 'row',
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: colors.backgroundColor,
     paddingVertical: 14,
     paddingLeft:40
  }
});

const textStyles = StyleSheet.create({
  formText: {
    fontSize: 18,
    textAlign: 'center',
  },
  formTextCheckbox: {
    fontSize: 16,
    textAlign: 'center',
  },
  inputText: {
    marginHorizontal: 48,
    marginVertical: 20,
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
    textAlign: 'center',
    color: colors.trueBlack,
  },
  buttonTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: '35%',
    borderRadius: 35,
    backgroundColor: colors.buttonPrimary,
    marginHorizontal: 25,
    marginTop: 18,
  },
});

export const registrationStyles = {
  containerStyles: containerStyles,
  textStyles: textStyles,
};
