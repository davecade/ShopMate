import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import {globalColors} from '../../styles/globalStyles';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globalColors.charcoal,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(15),
    borderWidth: horizontalScale(1.5),
    borderColor: globalColors.charcoal,
  },
  titleAndProcessContainer: {
    flex: 1,
  },
  cardTouchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listName: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    color: globalColors.orangeYellow,
  },
  listItems: {
    color: '#999',
  },
});
