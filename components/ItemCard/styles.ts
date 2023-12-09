import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    width: '100%',
  },
  listName: {
    fontSize: 16,
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
  itemPrice: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#FFFFFF',
    marginTop: 4,
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
    fontSize: 18,
    marginHorizontal: 10,
  },
  checkBox: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  incrementDecrement: {
    color: '#FFC107',
    fontSize: 25,
    lineHeight: 30,
  },
  deleteIcon: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
