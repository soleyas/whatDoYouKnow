import React from 'react';
import Welcome from '../components/Welcome';
import ChoosePlayer from '../components/ChoosePlayer';
import Categories from '../components/Categories';
import Questions from '../components/Questions';
import Winner from '../components/Winner';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Welcome: Welcome,
  ChoosePlayer: ChoosePlayer,
  Categories: Categories,
  Questions: Questions,
  Winner: Winner
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
