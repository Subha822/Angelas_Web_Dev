import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import task from "./notes";

function App() {
  const [noteList, setNoteList] = useState(task);
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });

  }

  function deleteNote(id) {
    const updatedNotes = noteList.filter((note) => note.key !== id);
    setNoteList(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    window.location.reload() // Re-load after state reset
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={() => deleteNote(note.key)}
          />
        );
      })}
      
       
      {task.map((note) => (
  <Note
    key={note.key}  // Required by React for list rendering
    id={note.key}   // Explicitly pass key as id
    title={note.title}
    content={note.content}
    onDelete={() => deleteNote(note.key)} // Ensure it's a function
  />
))}

      <Footer />
    </div>
  );
}

export default App;
