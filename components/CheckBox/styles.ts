import {StyleSheet} from 'react-native';
import {green} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  checkboxUnchecked: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  checkboxChecked: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: green,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  checked: {
    color: green,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
