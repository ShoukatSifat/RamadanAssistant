import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

const TasbihScreen = () => {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleNoteChange = (text) => {
    setNote(text);
  }

  const handleAddNote = () => {
    if (note) {
      setNotes([...notes, { id: Date.now(), text: note }]);
      setNote('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasbihContainer}>
        <Text style={styles.count}>{count}</Text>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
            <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCount}>
            <Text style={styles.buttonText}>Count</Text>
          </TouchableOpacity>
        </View>
            
      </View>
      <View style={styles.notesContainer}>
        <TextInput
          style={styles.noteInput}
          value={note}
          onChangeText={handleNoteChange}
          placeholderTextColor="#CCCCCC"
          placeholder="Add a Dua you want to recite..."
        />
        <TouchableOpacity style={styles.addNoteButton} onPress={handleAddNote}>
          <Text style={styles.buttonText}>Add Dua</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.notesList}
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text style={styles.noteText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 20,
  },
  tasbihContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  notesContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 32,
  },
  count: {
    fontSize: 72,
    marginBottom: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 9999,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginHorizontal: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  resetButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  noteInput: {
    height: 48,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#FFFFFF',
  },
  addNoteButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  notesList: {
    flex: 1,
    marginVertical: 16,
  },
  noteItem: {
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
  },
  noteText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default TasbihScreen;
