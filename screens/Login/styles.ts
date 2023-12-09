import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {globalColors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scaleFontSize(32),
    color: 'white',
    marginBottom: verticalScale(20),
  },
  subTitle: {
    fontSize: scaleFontSize(24),
    color: 'white',
    marginBottom: verticalScale(10),
  },
  description: {
    fontSize: scaleFontSize(18),
    color: 'white',
    marginBottom: verticalScale(40),
  },
  button: {
    backgroundColor: 'turquoise',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: horizontalScale(10),
  },
  buttonText: {
    color: 'black',
    fontSize: scaleFontSize(18),
  },
});
