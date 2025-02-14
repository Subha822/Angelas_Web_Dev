import React,{ useState } from "react";
import notes from "../notes"; // Import existing notes

function NoteApp() {
  const [noteList, setNoteList] = useState(notes);
  const [newNote, setNewNote] = useState({ title: "", content: "",key:"" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  }

  function addNote() {
    if (!newNote.title || !newNote.content) {
        alert("Please enter both title and content.");
        return;
      }
    
      // Find the next available key (avoid duplicates)
      const existingKeys = noteList.map((note) => note.key);
      const newKey = existingKeys.length > 0 ? Math.max(...existingKeys) + 1 : 1;
    
      const updatedNotes = [
        ...noteList,
        { key: newKey, title: newNote.title, content: newNote.content },
      ];
    
      setNoteList(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Save to local storage
    
      setNewNote({ title: "", content: "" }); // Reset input fields
  }

  return (
    <div>
        <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newNote.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={newNote.content}
        onChange={handleChange}
      />
      <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default NoteApp;
