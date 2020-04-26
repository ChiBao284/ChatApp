import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './Screen/LoginScreen';
import ChatSreen from './Screen/ChatSreen';
import {ListView} from 'deprecated-react-native-listview';

const Tabnavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatSreen,
  },
  {
    headerMode: 'none',
  },
);
export default createAppContainer(Tabnavigator);
