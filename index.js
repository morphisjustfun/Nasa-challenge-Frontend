/**
 * @format
 */

import App from './src/components/App';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import pages from './src/constants/pages';

Navigation.registerComponent(pages.APP,() => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
      root:{
         stack: {
            children: [
               {
                  component: {
                     name: pages.APP
                  }
               }
            ]
         }
      }
   })
})

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});
