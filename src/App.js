import Note from "./components/Note";
import NoteBody from "./components/NoteBody";
import Sidebar from "./components/Sidebar";

function App() {
  return <div className="main-wrapper">
    <Sidebar style={"side-bar"}/>
    <NoteBody style={"note-body-container"}/>
  </div>;
}

export default App;
