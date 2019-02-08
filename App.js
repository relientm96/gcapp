import React from 'react';
import { 
  createSwitchNavigator, 
  createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
//Navigators
import AppNavigator from './navigators/HomeNavigator';
import AuthStack from './navigators/AuthNavigatior';

/** App Navigation Structure
 * 
 * App (Main Application)
 *              -> Home
 *                  -> Bible Study Details 
 *                  -> Verse Details
 *              -> Events
 *                  -> Event Picture View
 *                  -> Event Calendar View
 *              -> Prayers
 *                  -> Prayer List View
 *                      -> Individual Prayer List Item Details
 *              -> Profile
 *                  Tab View:
 *                  -> Main Profile View (With settings)
 *                  -> Members List
 * Authentication 
 *              -> Login
 *              -> Register
 *              -> Forgot Password
 * 
 * Auth Loading Screen (While loading between authentication and app)
 * 
 * 
 */

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//The Main App Container
const ApplicationNavigator = createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    //Start at login screen
    initialRouteName: 'Auth',
  }
));

const AppContainer = createAppContainer(ApplicationNavigator);



