import {StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  titleContainer: {
     flex:0.15,
     justifyContent:'center',
     alignItems:'center'
  },
  factorContainer: {
     flex: 0.35,
     justifyContent:'center',
     alignItems:'center'
  },
  labelColorsContainer: {
     flexDirection: 'row',
     justifyContent:'center',
     alignItems:'center'
  },
  adviceContainer:{
     flex: 0.35,
     justifyContent: 'flex-end',
     alignItems: 'center',
  }
});

const textStyles = StyleSheet.create({
   title: {
      fontSize: 28,
      textAlign:'center',
      marginHorizontal: 30,
      marginTop: 40
   },
   labelColor: {
      fontSize: 16,
      textAlign:'center',
      marginHorizontal: 20
   },
   advice:{
      fontSize: 16,
      textAlign:'center',
      marginHorizontal: 20,
      marginVertical: 40
   }
})

export const riskStyles = {
   containerStyles: containerStyles,
   textStyles: textStyles
};
