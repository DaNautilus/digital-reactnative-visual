import React from 'react';
import { View, Image, StatusBar } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import AnimatedLogin from './AnimatedLogin';
import * as colors from '../colors';
import { Text } from '../atoms/Typography';
import Textfield from '../atoms/Textfield';
import Button from '../atoms/Button';

StatusBar.setBarStyle('light-content');
// StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor(colors.blue);

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    drawerLabel: 'Login',
  };

  render() {
    const onAnimationDone = () => {
      this.loginView.reset();
    };

    const onPress = () => {
      this.loginView.animate();
    };

    return (
      <AnimatedLogin
        ref={ref => {
          this.loginView = ref;
        }}
        onAnimationDone={onAnimationDone}
        logo={
          <Image
            source={require('../../assets/img/appicon.png')} // eslint-disable-line global-require
            style={{ width: 76, height: 76 }}
          />
        }
        footer={
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>APP Version: 1.0.0</Text>
            <Text>API Version: 1.2.1</Text>
          </View>
        }
      >
        <Textfield label="Username" />
        <Textfield label="Password" />
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button onPress={onPress} primary>
            Login
          </Button>
        </View>
      </AnimatedLogin>
    );
  }
}

storiesOf('AnimatedLogin', module).add('Sample', () => <Login />);
