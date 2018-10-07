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
  label: {
    justifyContent: 'flex-start',
    top: 10,
    padding: 20,
    fontSize: 20,
    color: 'white',
    position: 'relative',
  },
  midLabel: {
    justifyContent: 'flex-start',
    top: 50,
    padding: 20,
    paddingBottom: 100,
    fontSize: 20,
    color: 'white',
    position: 'relative',
  },
  lastLabel: {
    justifyContent: 'flex-start',
    top: 50,
    padding: 20,
    paddingBottom: 100,
    fontSize: 20,
    color: 'white',
    position: 'relative',
  },
  water: {
    justifyContent: 'flex-start',
    top: 10,
    padding: 15,
    fontSize: 20,
    color: 'white',
    position: 'relative',
  },
  modal: {
    //top: 85,
    padding: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    position: 'relative',
    borderBottomColor: 'rgba(52, 52, 52, 0.3)',
    borderTopColor: 'rgba(52, 52, 52, 0.3)',
    borderRightColor: 'rgba(52, 52, 52, 0.3)',
    borderLeftColor: 'rgba(52, 52, 52, 0.3)',
  },
  modal2: {
    //top: 165,
    padding: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    position: 'relative',
    borderBottomColor: 'rgba(52, 52, 52, 0.3)',
    borderTopColor: 'rgba(52, 52, 52, 0.3)',
    borderRightColor: 'rgba(52, 52, 52, 0.3)',
    borderLeftColor: 'rgba(52, 52, 52, 0.3)',
  },
  success: {
    top: 50,
    padding: 30,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: 'rgba(52, 52, 255, 0.8)',
  }
});
