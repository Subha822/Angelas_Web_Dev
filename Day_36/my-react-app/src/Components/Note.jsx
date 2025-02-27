import React from "react";

function Note(props) {
  function handleClick() {
    event.preventDefault();
    props.onDelete(props.id); // Use `id` instead of `key`
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
