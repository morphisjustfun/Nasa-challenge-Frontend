import App from './src/components/App';
import WelcomePage from './src/components/WelcomePage';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import pages from './src/constants/pages';

Navigation.registerComponent(pages.APP,() => App);
Navigation.registerComponent(pages.WELCOME_PAGE,() => WelcomePage);

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
