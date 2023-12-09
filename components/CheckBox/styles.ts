import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/globalStyles';
import {horizontalScale, scaleFontSize} from '../../styles/scaling';

export const styles = StyleSheet.create({
  checkboxUnchecked: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    borderRadius: horizontalScale(50),
    borderWidth: horizontalScale(3),
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  checkboxChecked: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    borderRadius: horizontalScale(50),
    borderWidth: horizontalScale(3),
    borderColor: globalColors.completedColor,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  checked: {
    color: globalColors.completedColor,
    fontWeight: 'bold',
    fontSize: scaleFontSize(20),
  },
});
