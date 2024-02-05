import React, { useEffect, useState } from "react";
import { getNote } from "../utils/HttpService";
import NoteCard from "./NoteCard";
import '../styles/ArchiveContainer.scss'
function ArchiveContainer() {
  const [notesList, setNoteList] = useState([]);

  useEffect(async () => {
    const res = await getNote("/Notes");
    setNoteList(res.data.data);
  }, []);


  return(
  <>
    <div className="arch-cnt">
        <div className="arch-note-div">
          {notesList.filter((ele)=> ele.isArchieved).map((ele) => (
            <NoteCard ele={ele} />
          ))}
        </div>
      </div>
  </>)
}

export default ArchiveContainer;
