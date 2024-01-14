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
    width: '100%',
  },
  textInputContainer: {
    paddingHorizontal: horizontalScale(15),
  },
  input: {
    height: verticalScale(30),
    marginBottom: verticalScale(10),
    borderWidth: verticalScale(0),
    color: 'white',
    paddingHorizontal: horizontalScale(15),
    fontSize: scaleFontSize(18),
    borderRadius: horizontalScale(10),
    backgroundColor: '#444',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    borderBottomWidth: horizontalScale(1),
    borderBottomColor: '#555',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingRight: verticalScale(10),
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(18),
    color: globalColors.orangeYellow,
    maxWidth: '80%',
  },
  price: {
    color: globalColors.completedColor,
    fontSize: scaleFontSize(14),
  },
  addButton: {
    backgroundColor: globalColors.appOrange,
    borderRadius: horizontalScale(50),
  },
  addButtonText: {
    color: 'white',
    fontSize: scaleFontSize(18),
  },
  scrollableList: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
  },
});
