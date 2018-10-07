import React, { Component } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon } from 'native-base';

import styles from '../Styles/Screens/HomeScreenStyles';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
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
      ),
      headerLeft: (
        <Button transparent onPress={ () => navigation.navigate('AddPlant')}>
        <Icon style={styles.settingsButton} name='md-add-circle' />
        </Button>
      )
    }
  }

  headerPress() {
    this.props.navigation.navigate('AddPlant')
  }

  componentDidMount() {
    this.props.navigation.setParams({handlePress: this.headerPress })
  }

  render() {
    return (
      <Container>
        <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.appName}>Howdy Sprinkler!</Text>
          <Button style={styles.addButton} onPress={() => this.props.navigation.navigate('AddPlant')}>
          <Icon name='ios-add'></Icon>
          <Text>Add a plant to be auto watered!</Text>
          </Button>
        </LinearGradient>
      </Container>
    );
  }
}
