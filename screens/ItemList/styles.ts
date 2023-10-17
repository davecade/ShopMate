import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#131313',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D2C2C2',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    color: '#B2B2B2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    color: '#D2C2C2',
  },
  label: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    width: '100%',
  },
});
