// src/components/NoteList.js
import React from 'react';

const NoteList = ({ notes, deleteNote, setCurrentNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => setCurrentNote(note)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
