import React, { useEffect, useState } from "react";
import { getNote } from "../utils/HttpService";
import "../styles/NotesContainer.scss";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

function NotesContainer() {
  const [notesList, setNoteList] = useState([]);

  useEffect(async () => {
    const res = await getNote("/Notes");
    setNoteList(res.data.data);
  }, []);

  const updateNotesList = ({operation, data}) => {
    if(operation==="add") setNoteList([data, ...notesList]);
    else if(operation==="archive") {
      const filterList = notesList.filter(ele => ele._id !== data)
      setNoteList(filterList)
    }
    
  };

  return (
    <>
      <CreateNote updateNotesList={updateNotesList} />

      <div className="cnt">
        <div className="note-div">
          {notesList.filter((ele)=> !ele.isArchieved).map((ele) => (
            <NoteCard ele={ele} updateNotesList={updateNotesList}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default NotesContainer;
