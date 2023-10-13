import {StyleSheet} from 'react-native';

export const inProgressColor = '#19aa29';
export const notStartedColor = '#a0a0a0';
export const completedColor = '#2ffa43';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1b1b',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  listName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listItems: {
    color: '#999',
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#00cc66',
    fontWeight: 'bold',
  },
});
