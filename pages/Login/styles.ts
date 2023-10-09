import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'turquoise',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});
