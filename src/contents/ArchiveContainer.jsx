import React, { useEffect, useState } from "react";
import { getNote } from "../utils/HttpService";
import NoteCard from "./NoteCard";
import '../styles/ArchiveContainer.scss'

function ArchiveContainer() {
  const [notesList, setNoteList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await getNote("/Notes");
      setNoteList(res.data.data);
    }
    fetchData();
  }, []);

  const updateNotesList = ({operation, data}) => {
    if(operation==="archive") {
      const filterList = notesList.filter(ele => ele._id !== data)
      setNoteList(filterList)
    }
  };

  return(
  <>
    <div className="arch-cnt">
        <div className="arch-note-div">
          {notesList.filter((ele)=> ele.isArchieved && !ele.isDeleted).map((ele) => (
            <NoteCard ele={ele} updateNotesList={updateNotesList}/>
          ))}
        </div>
      </div>
  </>)
}

export default ArchiveContainer;
