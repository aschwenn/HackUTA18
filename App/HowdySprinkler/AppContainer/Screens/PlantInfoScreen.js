import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon } from 'native-base';

import styles from '../Styles/Screens/PlantInfoScreenStyles'

export default class PlantInfoScreen extends Component {
  static navigationOptions = {
    title: 'Plant Info',
    headerStyle: {
      backgroundColor: '#11998e',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button transparent>
      <Icon style={styles.settingsButton} name='ios-settings' />
      </Button>
    )
  }

  render() {
    return (
      <Container>
        <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <StatusBar backgroundColor='#11998e' barStyle='light-content' />
        </LinearGradient>
      </Container>
    );
  }
}
