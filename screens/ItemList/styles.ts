import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

export const styles = StyleSheet.create({
  titleProgressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    width: '100%',
  },
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: 'bold',
    color: '#D2C2C2',
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: '#1f1f1f',
    borderRadius: horizontalScale(20),
    padding: horizontalScale(10),
    fontSize: scaleFontSize(18),
    color: '#B2B2B2',
  },
  buttonContainerRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  label: {
    color: 'white',
    fontSize: scaleFontSize(24),
  },
  container: {
    flex: 1,
    backgroundColor: '#131313',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextContainer: {
    paddingTop: verticalScale(130),
  },
  emptyText: {
    fontSize: scaleFontSize(18),
    color: 'white',
    textAlign: 'center',
  },
  addButtonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  progressAndAddContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    width: '100%',
  },
  totalCost: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
