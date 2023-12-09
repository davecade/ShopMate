import {StyleSheet} from 'react-native';
import {verticalScale} from '../../styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: verticalScale(20),
    alignItems: 'center',
    backgroundColor: '#131313',
  },
});
