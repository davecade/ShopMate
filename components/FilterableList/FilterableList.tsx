import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ShoppingItem} from '../../types';

type FilterableListProps = {
  list: ShoppingItem[];
  onAdd: (item: ShoppingItem) => void;
};

export const FilterableList = ({list, onAdd}: FilterableListProps) => {
  const [query, setQuery] = useState('');

  const filteredItems = query
    ? list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    : list;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
        placeholder="Type here..."
        placeholderTextColor="#666"
      />
      <FlatList
        data={filteredItems}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => onAdd(item)}
              style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => (item._id ? item._id : item.name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: '#202020',
    paddingTop: 50,
    width: '95%',
    borderRadius: 15,
  },
  input: {
    height: 50,
    marginHorizontal: 10,
    borderWidth: 0,
    color: 'white',
    paddingHorizontal: 15,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#444',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
