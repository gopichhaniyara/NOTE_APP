// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import NoteForm from '/components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm 
        addNote={addNote} 
        currentNote={currentNote} 
        updateNote={updateNote} 
        setCurrentNote={setCurrentNote} 
      />
      <NoteList 
        notes={notes} 
        deleteNote={deleteNote} 
        setCurrentNote={setCurrentNote} 
      />
    </div>
  );
};

export default App;
