import React, { useEffect, useState } from "react";
import { getNote } from "../utils/HttpService";
import NoteCard from "./NoteCard";
import '../styles/TrashContainer.scss'

function TrashContainer(){
  const [notesList, setNoteList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await getNote("/Notes");
      setNoteList(res.data.data);
    }
    fetchData();
  }, []);

  const updateNotesList = ({operation, data}) => {
    if(operation==="trash") {
      const filterList = notesList.filter(ele => ele._id !== data)
      setNoteList(filterList)
    }
    
  };

  return(
  <>
    <div className="trash-cnt">
        <div className="trash-note-div">
          {notesList.filter((ele)=> ele.isDeleted).map((ele) => (
            <NoteCard ele={ele} updateNotesList={updateNotesList}/>
          ))}
        </div>
      </div>
  </>)
}

export default TrashContainer;