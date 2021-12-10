import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const NoteBody = ({content, currentNote, setCurrentNoteBody}) => {
  const noteContent = content.filter(item => item.id == currentNote)[0].body;
  console.log("CurrentNote: ", currentNote);
  console.log("Content: ", content);

  const [note, setNote] = useState(noteContent);
  const [isNoteFocused, setIsNoteFocused] = useState(true);

  console.log("note: ", note);

  const handleChange = (event) => {
    setNote(event.target.value);
  }

    return <div className="note-body-container">
      <div className="note-body">
      {!isNoteFocused ? (
        <Typography
          onClick={() => {
            setIsNoteFocused(true);
          }}
        >
        </Typography>
      ) : (
        <TextField
          autoFocus
          value={noteContent}
          onChange={handleChange}
          multiline={true}
        />
      )}
      </div>
      </div>
  }
  
  export default NoteBody;