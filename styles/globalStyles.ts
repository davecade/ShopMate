import {StyleSheet} from 'react-native';
import {horizontalScale} from './scaling';

export const globalColors = {
  inProgressColor: '#19aa29',
  notStartedColor: '#a0a0a0',
  completedColor: '#2ffa43',
  orangeYellow: '#FFC107',
  charcoal: '#333333',
  slateBlue: '#5E6C84',
  appBlue: '#31708E',
  steelBlue: '#4B86B4',
  turquoise: 'turquoise',
  darkGreen: '#265751',
  appOrange: '#FF9800',
  appBackground: '#131313',
  messengerBlue: '#143ca6',
  darkBlue: 'darkblue',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: globalColors.appBackground,
    padding: horizontalScale(10),
  },
  flex: {
    flex: 1,
  },
});
