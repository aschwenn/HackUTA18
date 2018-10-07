import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Form, Button, Content, Text, Icon, Item, Input } from 'native-base';
import NumericInput, { calcSize } from 'react-native-numeric-input'
import ModalSelector from 'react-native-modal-selector'

import styles from '../Styles/Screens/AddPlantScreenStyles';

export default class AddPlantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alfred',
      timeInterval: -1,
      waterAmt: -1,
     };
  }

  onValueChange(value: string) {
    this.setState({
      pickerSelected: value
    });
  }

  static navigationOptions = {
    title: 'Add a Plant',
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
    let index = 0;
        const data = [
            { key: index++, label: '5 minutes', value: 5 },
            { key: index++, label: '10 minutes', value: 10 },
            { key: index++, label: '15 minutes', value: 15 },
            { key: index++, label: '30 minutes', value: 30},
            { key: index++, label: '45 minutes', value: 45},
            { key: index++, label: '1 hour', value: 60},
            { key: index++, label: '2 hours', value: 120},
            { key: index++, label: '4 hours', value: 240},
            { key: index++, label: '6 hours', value: 360},
            { key: index++, label: '8 hours', value: 480},
            { key: index++, label: '12 hours', value: 720},
            { key: index++, label: '18 hours', value: 1080},
            { key: index++, label: '24 hours', value: 1440},
            { key: index++, label: '48 hours', value: 2880},
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            // { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
        ];
    let j = 0;
      const dataML = [
        { key: j++, label: '20 milliliters', value: 20},
        { key: j++, label: '40 milliliters', value: 40},
        { key: j++, label: '60 milliliters', value: 60},
        { key: j++, label: '80 milliliters', value: 80},
        { key: j++, label: '100 milliliters', value: 100},
        { key: j++, label: '120 milliliters', value: 120},
        { key: j++, label: '140 milliliters', value: 140},
        { key: j++, label: '160 milliliters', value: 160},
        { key: j++, label: '180 milliliters', value: 180},
        { key: j++, label: '200 milliliters', value: 200},
      ];
    return (
      <Container>
        <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
        <StatusBar backgroundColor='#11998e' barStyle='light-content' />
          <Content>
            <Text style={styles.label}>Enter a name for your plant!</Text>
            <Form>
              <Item>
                <Input onChangeText={(name) => this.setState({name})} placeholder='Ex: "Alfred"' />
              </Item>
              <Text style={styles.midLabel}>How much water does {this.state.name} need?</Text>
              <ModalSelector
                selectStyle={styles.modal}
                selectTextStyle={{color: 'white'}}
                data={dataML}
                initValue="Select a watering amount!"
                onChange={(option) => this.setState({waterAmt: option.value})}
              />
              <Text style={styles.lastLabel}>How often will {this.state.name} need to be watered?</Text>
              <ModalSelector
                selectStyle={styles.modal2}
                selectTextStyle={{color: 'white'}}
                data={data}
                initValue="Select a watering interval!"
                onChange={(option) => this.setState({timeInterval: option.value})}
              />
            </Form>
            <Button style={styles.success} onPress={() => this.props.navigation.navigate('AddSuccess')}>
            <Text>Initialize Plant Diagnostics!</Text>
            </Button>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
