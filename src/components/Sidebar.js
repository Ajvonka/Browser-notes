import Note from "./Note";
import * as IconName from "react-icons/bi";

const Sidebar = ({style}) => {
    return <div className={style}>
      <div className="note-container">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      </div>
      <div className="icon-container">
        <div className="icon-plus">
          <IconName.BiListPlus  style={{ color: "#009999", fontSize: "2.5em" }}/>
        </div>
      </div>
      </div>
  }
  
  export default Sidebar;