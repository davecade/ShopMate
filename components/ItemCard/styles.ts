import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/globalStyles';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globalColors.charcoal,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(10),
    borderWidth: horizontalScale(1.5),
    width: '100%',
    borderColor: globalColors.charcoal,
  },
  listName: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: globalColors.orangeYellow,
  },
  listItems: {
    color: '#999',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  itemPrice: {
    fontSize: scaleFontSize(16),
    fontWeight: 'normal',
    color: globalColors.completedColor,
    marginTop: verticalScale(4),
  },
  text: {
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  quantityText: {
    fontSize: scaleFontSize(18),
    marginHorizontal: horizontalScale(10),
  },
  checkBox: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  incrementDecrement: {
    color: globalColors.orangeYellow,
    fontSize: scaleFontSize(25),
    lineHeight: horizontalScale(30),
  },
  deleteIcon: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
