import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.19

import Register from './Register';
import Login from './Login';
import Profile from './Profile';

const AuthStack = StackNavigator({
  Register: { screen: Register, navigationOptions: { headerTitle: 'Register' } },
  Login: { screen: Login, navigationOptions: { headerTitle: 'Login' } },
});

const LoggedInStack = StackNavigator({
  Profile: { screen: Profile, navigationOptions: { headerTitle: 'Profile' } },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  handleChangeLoginState = (loggedIn = false) => {
    this.setState({ loggedIn });
  };

  render() {
    return this.state.loggedIn ?
      <LoggedInStack screenProps={{ changeLoginState: this.handleChangeLoginState }} /> :
      <AuthStack screenProps={{ changeLoginState: this.handleChangeLoginState }} />
  }
}
