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
    flex: 0.3,
    justifyContent: 'center',
  },
  checkBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 48,
  },
  checkBoxContainerElementLeft: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 13,
  },
  checkBoxContainerElementRight: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 13,
  },
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
    borderRadius: 20,
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
