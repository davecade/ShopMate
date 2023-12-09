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
    justifyContent: 'center',
    backgroundColor: globalColors.appBackground,
    padding: horizontalScale(20),
  },
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: 'bold',
    color: '#D2C2C2',
  },
  input: {
    width: '100%',
    height: verticalScale(30),
    backgroundColor: '#1f1f1f',
    borderRadius: horizontalScale(20),
    padding: horizontalScale(10),
    fontSize: scaleFontSize(18),
    color: '#B2B2B2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    color: '#D2C2C2',
  },
  label: {
    color: 'white',
    fontSize: scaleFontSize(18),
    textAlign: 'left',
    width: '100%',
  },
});
