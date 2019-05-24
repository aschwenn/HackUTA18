import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsButton: {
    color: 'white'
  },
  welcome: {
    textAlign: 'center',
    padding: 10,
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
  },
  sub: {
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    color: 'white',
    position: 'relative',
  },
  mini: {
    textAlign: 'center',
    padding: 10,
    fontSize: 12,
    color: 'white',
    position: 'relative',
  },
  none: {
    textAlign: 'center',
    padding: 10,
    fontSize: 8,
    color: 'rgb(52,52,52)',
    position: 'relative',
  }
});
