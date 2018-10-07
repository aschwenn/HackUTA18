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
      plants: {},
      test: 'Nope',
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
    fetch('http://hackuta18-218707.appspot.com/getData', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);

         JSON.stringify(responseJson)

         this.setState({
            test: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
  }*/

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
      { (this.state.firstTime == true) &&
        <React.Fragment>
          <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.appName}>Howdy Sprinkler!</Text>
          <Text style={styles.welcome}>Testing Fetch:{this.state.test}</Text>
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
            <List
              dataArray={this.state.plants}
              renderRow={(plant) => <PlantCard {...plant} onPress={() => {this.openPlantInfoScreen(plant)}}/>}/>
            </LinearGradient>
            </React.Fragment>
          }
      </Container>
    );
  }
}
