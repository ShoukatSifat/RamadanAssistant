import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Vibration } from 'react-native';

const TasbihScreen = () => {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleCount = () => {
    setCount(count + 1);
    Vibration.vibrate(50); // Vibrate for 50 milliseconds
  }

  const handleReset = () => {
    setCount(0);
    Vibration.vibrate([0, 30, 20, 30]); // Vibrate in a pattern: 0ms, 30ms, 20ms, 30ms
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

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(item => item.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasbih Counter</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.tasbihContainer}>
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
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteNote(item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
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
    backgroundColor: '#F2F2F2',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  countText: {
    fontSize: 36,
    color: '#333',
  },
  tasbihContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 999,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  resetButton: {
    backgroundColor: '#FF5722',
  },
  resetButtonText: {
    fontSize: 16,
  },
  notesContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#CCC',
  },
  noteInput: {
    height: 48,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#333',
    fontSize: 14,
  },
  addNoteButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  notesList: {
    flex: 1,
    marginVertical: 16,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  noteText: {
    fontSize: 14,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default TasbihScreen;
