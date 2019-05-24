import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon, List } from 'native-base';

import styles from '../Styles/Screens/HomeScreenStyles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alfred',
      timeInterval: -1,
      waterAmt: -1,
      firstTime: true,
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

  /*componentDidMount = () => {
    let plants = []
    fetch('http://hackuta18-218707.appspot.com/getData', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);

         plants = responseJson;

         if(plants.length === 0){
           this.state.firstTime = true
         }

         this.setState({
            plants: plants,
         })

         this.renderPlantDash()
      })
      .catch((error) => {
         console.error(error);
      });
  }

  renderPlantDash() {
    let i = 0;
    for(i; i < this.state.plants.length; i++){
      this.setState({
         amount: responseJson[i].amount,
         amount2: responseJson[i].amount2,
         id: responseJson[i].id,
         moisture: responseJson[i].moisture,
         name: responseJson[i].name,
         period: responseJson[i].period,
         scheduled: responseJson[i].scheduled,
         tank_low: responseJson[i].tank_low,
         water_immediate: responseJson.water_immediate,
      })
    }
  }

  openPlantInfoScreen = (doc) => {
    this.props.navigation.push({
      screen: 'PlantInfo',
      backButtonTitle: '',
      passProps: {doc: doc},
      title: doc.title
    })
  }*/

  render() {
    return (
      <Container>
      <StatusBar backgroundColor='#11998e' barStyle='light-content' />
      { (this.state.firstTime == true) &&
        <React.Fragment>
          <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.appName}>Howdy Sprinkler!</Text>
          <Button style={styles.addButton} onPress={() => this.props.navigation.navigate('AddPlant')}>
          <Icon name='ios-add'></Icon>
          <Text>Add a plant to be auto watered!</Text>
          </Button>
          </LinearGradient>
          </React.Fragment>
          }
          { (this.state.firstTime == false) &&
            <React.Fragment>
            <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.containerDash}>
            <Text style={styles.dashboard}>Plant Dashboard</Text>
            this.createPlantCards()
            <List
              dataArray={this.state.plants}
              />
            </LinearGradient>
            </React.Fragment>
          }
      </Container>
    );
  }
}
