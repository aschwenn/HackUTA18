import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    top: -100,
    padding: 10,
    fontSize: 24,
    color: 'white',
    position: 'relative',
  },
  appName: {
    top: -100,
    padding: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
  },
  addButton: {
    position: 'relative',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  }
});
