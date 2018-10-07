import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon, List, ListItem } from 'native-base';

import styles from '../Styles/Screens/DashboardScreenStyles';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alfred',
      timeInterval: -1,
      waterAmt: -1,
      amount: 0,
      amount2: 0,
      id: 0,
      moisture: 0,
      name: 'null',
      period: 0,
      scheduled: 0,
      tank_low: false,
      water_immediate: 0,
      plants: [],
     };
  }

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

  componentDidMount = () => {
    let plantsArr = []
    fetch('http://hackuta18-218707.appspot.com/getData', {
      method: 'GET'
    })
//      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);

         plants = responseJson;

         this.setState({
            plants: plantsArr,
         })
      })
      .catch((error) => {
         console.error(error);
      });
  }

  openPlantInfoScreen = (doc) => {
    this.props.navigation.push({
      screen: 'PlantInfo',
      backButtonTitle: '',
      passProps: {doc: doc},
      title: doc.title
    })
  }

  render() {
    return (
      <Container>
      <StatusBar backgroundColor='#11998e' barStyle='light-content' />
          <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <Text style={styles.dashboard}>Plant Dashboard</Text>
          </LinearGradient>
      </Container>
    );
  }
}
