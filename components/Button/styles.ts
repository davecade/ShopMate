import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: globalColors.turquoise,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: 'black',
    fontSize: 18,
  },
  primaryButton: {
    backgroundColor: globalColors.messengerBlue,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 150,
  },
  primaryButtonText: {
    color: '#FFF3E0',
    fontWeight: 'bold',
    fontSize: 18,
  },
  greyButton: {
    backgroundColor: globalColors.slateBlue,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 150,
  },
  greyButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
