import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleProgressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
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
  buttonContainerRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  label: {
    color: 'white',
    fontSize: 24,
  },
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
  emptyTextContainer: {
    paddingTop: 130,
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
  },
  addButtonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  progressAndAddContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: {
    borderWidth: 1,
    flexDirection: 'row',
  },
});
