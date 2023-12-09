import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/globalStyles';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

export const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: globalColors.turquoise,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: horizontalScale(10),
  },
  secondaryButtonText: {
    color: 'black',
    fontSize: scaleFontSize(18),
  },
  primaryButton: {
    backgroundColor: globalColors.messengerBlue,
    padding: horizontalScale(15),
    borderRadius: horizontalScale(30),
    alignItems: 'center',
    width: horizontalScale(120),
  },
  primaryButtonText: {
    color: '#FFF3E0',
    fontWeight: 'bold',
    fontSize: scaleFontSize(18),
  },
  greyButton: {
    backgroundColor: globalColors.slateBlue,
    padding: horizontalScale(15),
    borderRadius: horizontalScale(30),
    alignItems: 'center',
    width: horizontalScale(120),
  },
  greyButtonText: {
    color: '#FFF',
    fontSize: scaleFontSize(18),
  },
});
