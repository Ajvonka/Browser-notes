import NoteBody from "./components/NoteBody";
import Sidebar from "./components/Sidebar";
import { dummyDB } from "./utils/config";
import React, { useState } from "react";

function App() {
  const [currentNote, setCurrentNote] = useState(1);
  const [currentBody, setCurrentNoteBody] = useState(0);
  
  return <div className="main-wrapper">
    <Sidebar content={dummyDB} setCurrentNote={setCurrentNote}/>
    <NoteBody content={dummyDB} currentNote={currentNote} setCurrentNoteBody={setCurrentNoteBody}/>
  </div>;
}

export default App;
