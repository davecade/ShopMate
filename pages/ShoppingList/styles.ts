import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  shoppingTitle: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
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
  cartImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  emptyText: {
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
