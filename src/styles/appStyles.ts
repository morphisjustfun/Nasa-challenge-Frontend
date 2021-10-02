import {StyleSheet} from 'react-native';
import { colors } from '../constants/theme';


const containerStyles = StyleSheet.create({
   root: {
      flex: 1,
      backgroundColor: colors.backgroundColor
   },
   logoContainer: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: 40
   },
   welcomeContainer: {
      flex: 0.3,
      margin: 20
   },
   subtitleContainer: {
      flex: 0.2
   }
})

const textStyles = StyleSheet.create({
   welcomeText: {
      fontSize: 24,
      textAlign: 'center',
   },
   subtitleText: {
      fontSize: 24,
      textAlign:'center'
   },
   aboutText:{
      fontSize:16,
      textAlign: 'center',
      marginTop: 22
   }
})

export const appStyles = {
   containerStyles: containerStyles,
   textStyles: textStyles
}
