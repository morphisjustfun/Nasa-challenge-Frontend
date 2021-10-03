import {StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

const containerStyles = StyleSheet.create({
   root: {
      flex: 1,
      backgroundColor: colors.backgroundSecondary
   },
   titleContainer: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'center'
   },
   logoContainer: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

const textStyles = StyleSheet.create({
   titleText: {
      fontSize: 24,
      textAlign: 'center',
      marginHorizontal: 20,
      marginVertical: 60,
      color: colors.textPrimary
   },
   subTitleText: {
      fontSize: 18,
      textAlign: 'center',
      marginHorizontal: 20,
      color: colors.textPrimary
   }
})

export const preRegistrationStyles = {
   containerStyles: containerStyles,
   textStyles: textStyles
}
