import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const inputHandle = text => {
    setNote(text);
  };

  const addNote = () => {
    setNotes(notes => [...notes, note]);
    setNote('');
  };

  const deleteNote = index => {
    setNotes(notes => notes.slice(index, 1));
  };

  const updateNote = index => {
    setNotes(notes => notes.slice(index, 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <TextInput placeholder="..." onChangeText={inputHandle} value={note} />
        <Button title="Add" onPress={addNote} />
      </View>
      <ScrollView>
        {notes.map((note, index) => (
          <View key={index}>
            <Text>{note}</Text>
            <Button onPress={() => deleteNote(index)} title="Remove" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTwo: {
    flexDirection: 'row'
  }
});
