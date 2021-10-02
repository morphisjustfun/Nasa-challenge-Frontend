import {StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

const containerStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  topBarContainer: {
    flex: 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  logoContainer: {
    flex: 0.50,
    alignItems: 'center',
    justifyContent:'center'
  },
  textContainer: {
     flex: 0.14,
     justifyContent: 'center',
     alignItems: 'center'
  },
  buttonContainer: {
     flex: 0.20,
     justifyContent: 'center',
     alignSelf: 'center'
  }
});

const imageStyles = StyleSheet.create({
  topImage: {
     width: 50,
  },
  logoImage: {
  }
});

const textStyles = StyleSheet.create({
   topBarTextLeft: {
      fontSize: 16,
      marginLeft:10,
      textAlign: 'center'
   },
   topBarTextRight:{
      fontSize: 16,
      marginRight:10,
      textAlign: 'center',
   },
   subTitle:{
      fontSize: 24,
   },
   subSubTitle:{
      fontSize: 15,
      marginTop: 20
   },
   buttonTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: '35%',
    borderRadius: 35,
    backgroundColor: colors.buttonPrimary,
   }
})

export const welcomeStyles = {
  containerStyles: containerStyles,
  imageStyles: imageStyles,
  textStyles: textStyles
};
