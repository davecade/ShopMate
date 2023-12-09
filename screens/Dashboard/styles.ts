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
    padding: horizontalScale(20),
    justifyContent: 'center',
  },
  shoppingTitle: {
    fontSize: scaleFontSize(24),
    marginBottom: verticalScale(50),
    textAlign: 'center',
    color: 'white',
  },
  shoppingCartContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(50),
  },
  imageContainer: {
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
  },
});
