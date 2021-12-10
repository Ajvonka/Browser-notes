const Note = ({heading, id, setCurrentNote}) => {
const handleNoteOpen = e => setCurrentNote(e.target.id);

    return <div id={id} className="note" onClick={handleNoteOpen}>{heading}</div>
  }
  
  export default Note;