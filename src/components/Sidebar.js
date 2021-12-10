import Note from "./Note";
import * as IconName from "react-icons/bi";



const Sidebar = ({content, setCurrentNote}) => {

    return <div className="side-bar">
      <div className="note-container">
      {content.map((note) => <Note heading={note.title} key={note.id} id={note.id} setCurrentNote={setCurrentNote}/>)}
      </div>
      <div className="icon-container">
        <div className="icon-plus">
          <IconName.BiListPlus  style={{ color: "#113f67", fontSize: "2em"}}/>
        </div>
      </div>
      </div>
  }
  
  export default Sidebar;