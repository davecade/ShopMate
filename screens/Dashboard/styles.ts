import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: 20,
    justifyContent: 'center',
  },
  shoppingTitle: {
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
    color: 'white',
  },
  shoppingCartContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  imageContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
