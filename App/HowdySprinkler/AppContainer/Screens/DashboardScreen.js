import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
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

         plantsArr = responseJson;

         this.setState({
            plants: plantsArr,
         })

        /*
         let j = plants.length;
         for(i = 0; i < j;i++){
           plantsArr = [];
           this.setState({
              amount: responseJson[i].amount,
              amount2: responseJson[i].amount2,
              id: responseJson[i].id,
              moisture: responseJson[i].moisture,
              name: responseJson[i].name,
              period: responseJson[i].period,
              scheduled: responseJson[i].scheduled,
              tank_low: responseJson[i].tank_low,
              water_immediate: responseJson[i].water_immediate,
           })
          plantsArr = plants.map()
         }

         plants.foreach((p) => {
           this.setState({
              amount: p.amount,
              amount2: p.amount2,
              id: p.id,
              moisture: p.moisture,
              name: p.name,
              period: p.period,
              scheduled: p.scheduled,
              tank_low: p.tank_low,
              water_immediate: p.water_immediate,
           })
         });*/
      })
      .catch((error) => {
         console.error(error);
      });
  }

  /*openPlantInfoScreen = (doc) => {
    this.props.navigation.push({
      screen: 'PlantInfo',
      backButtonTitle: '',
      passProps: {doc: doc},
      title: doc.title
    })
  }*/

  render() {
    var constants = [
      'Albert',
      'Alfred',
      'Alex',
      'Allie',
      'Andrew',
      'Mandy',
    ]
    return (
      <Container>
          <List dataArray={constants} renderRow={(item) =>
              <ListItem button onPress={()=>this.setModalVisible(true, item)} >
              <Text>{item}</Text>
                </ListItem> } />
      </Container>
    );
  }
}
