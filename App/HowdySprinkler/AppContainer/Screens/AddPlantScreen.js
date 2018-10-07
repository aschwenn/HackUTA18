import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';

import styles from '../Styles/Screens/AddPlantScreenStyles';

export default class AddPlantScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#11998e',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
        <Button
          title="Go Back"
          color='white'
          onPress={() => this.props.navigation.goback()}
        >
        </Button>
      </LinearGradient>
    );
  }
}
