import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import {ShoppingItem} from '../../types';
import {styles} from './styles';
import AddButton from '../AddButton/AddButton';

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
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setQuery}
          value={query}
          placeholder="Type here..."
          placeholderTextColor="grey"
        />
      </View>
      <FlatList
        data={filteredItems}
        style={styles.scrollableList}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
              </View>
              <View style={styles.addButton}>
                <AddButton onPress={() => onAdd(item)} size="sm" />
              </View>
            </View>
          );
        }}
        keyExtractor={item => (item._id ? item._id : item.name)}
      />
    </View>
  );
};
