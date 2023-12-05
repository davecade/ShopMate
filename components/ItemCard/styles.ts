import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    width: '100%',
  },
  listName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFC107',
  },
  listItems: {
    color: '#999',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  text: {
    color: '#fff',
  },
});
