import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const NewItem = ({ text, onChangeText }) => {
  return (
    <View style={styles.itemContainer}>
      <TextInput
        style={styles.itemText}
        value={text}
        onChangeText={onChangeText}
        placeholder="Digite aqui"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    backgroundColor: '#EFEDED',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 20,
    justifyContent: 'space-around',
    fontWeight: 'bold',
  },
});

export default NewItem;
