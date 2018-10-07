import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
    top: -60,
    //padding: 5,
    fontSize: 64,
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
  },
  midLabel: {
    justifyContent: 'center',
    textAlign: 'center',
    // padding: 20,
    fontSize: 24,
    color: 'white',
    position: 'relative',
  },
  back: {
    top: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 40,
    position: 'relative',
  }
});
