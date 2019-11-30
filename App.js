import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var css = require('./assets/Style.js');
import HomeScreen from './components/Home';
import DetailsScreen from './components/Wallet'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);