import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D2C2C2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#4F4E4E',
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    color: '#B2B2B2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    color: '#D2C2C2',
    paddingVertical: 20,
  },
  label: {
    color: '#B2B2B2',
    fontSize: 18,
    textAlign: 'left',
    width: '100%',
    paddingBottom: 20,
  },
});
