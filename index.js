import App from './src/components/App';
import WelcomePage from './src/components/WelcomePage';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import pages from './src/constants/pages';
import PreRegistrationPage from './src/components/PreRegistration';
import RegionstrationPage from './src/components/RegistrationPage';

Navigation.registerComponent(pages.APP,() => App);
Navigation.registerComponent(pages.WELCOME_PAGE,() => WelcomePage);
Navigation.registerComponent(pages.PRE_REGISTRATION_PAGE, () => PreRegistrationPage);
Navigation.registerComponent(pages.REGISTRATION_PAGE, () => RegionstrationPage);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot(
      splashRoot
   )
})

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});

const splashRoot = {
   root: {
      component: {
         name: pages.APP
      }
   }
}

export const mainRoot = {
      root:{
         stack: {
            children: [
               {
                  component: {
                     name: pages.WELCOME_PAGE
                  }
               }
            ]
         }
      }
   }
