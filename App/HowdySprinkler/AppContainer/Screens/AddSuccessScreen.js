import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon } from 'native-base';

import styles from '../Styles/Screens/AddSuccessScreenStyles';

export default class AddSuccessScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#11998e',
    },
    header: null,
  }

  render() {
    return (
      <Container>
        <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <StatusBar backgroundColor='#11998e' barStyle='light-content' />
          <Text style={styles.success}>Success!</Text>
          <Text style={styles.midLabel}>Your plant has successfully been added and will be automatically watered!</Text>
          <Button large style={styles.back} onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Icon name='ios-home' />
          <Text>Go back Home to see it!</Text>
          </Button>
        </LinearGradient>
      </Container>
    );
  }
}
