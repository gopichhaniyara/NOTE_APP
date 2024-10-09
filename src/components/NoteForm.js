// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ addNote, currentNote, updateNote, setCurrentNote }) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (currentNote) {
      setNote(currentNote.text);
    } else {
      setNote('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) return;

    if (currentNote) {
      updateNote({ ...currentNote, text: note });
      setCurrentNote(null);
    } else {
      addNote({ id: uuidv4(), text: note });
    }

    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
      />
      <button type="submit">{currentNote ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default NoteForm;
