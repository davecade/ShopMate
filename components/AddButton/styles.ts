import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/globalStyles';
import {horizontalScale} from '../../styles/scaling';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.messengerBlue,
    borderRadius: horizontalScale(50),
    padding: horizontalScale(5),
  },
});
