import React from 'react';
import Welcome from '../components/Welcome';
import ChoosePlayer from '../components/ChoosePlayer';
import Categories from '../components/Categories';
import Questions from '../components/Questions';
import Winner from '../components/Winner';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ChoosePlayer: {
      screen: ChoosePlayer,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        gesturesEnabled: true
      }
    },
    Questions: {
      screen: Questions,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Winner: {
      screen: Winner,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
