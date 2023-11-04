import {StyleSheet} from 'react-native';
import {completedColor} from '../../styles/globalStyles';

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
    borderColor: completedColor,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  checked: {
    color: completedColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
