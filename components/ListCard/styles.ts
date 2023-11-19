import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1b1b',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1.5,
  },
  titleAndProcessContainer: {
    flex: 1,
  },
  cardTouchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  listName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listItems: {
    color: '#999',
  },
});
