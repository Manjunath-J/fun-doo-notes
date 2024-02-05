import React from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemIcon from "@mui/material/ListItemIcon";
import '../styles/NoteCard.scss'
import { isarchived } from "../utils/HttpService";
import Popper from '@mui/material/Popper';



const NoteCard = ({ele, updateNotesList} ) => {
  let id = ele._id;

  const handleIconsClick = (action)=>{
    if(action==="archive") isarchived("/Notes/isarch/",id)
    updateNotesList({operation:"archive",data:id})
  }
  
  return (
    <div className="getNote-div">
      <div className="get-title-div">
        <span>{ele.Title}</span>
      </div>
      <div className="get-desc-div">
        <span>{ele.Description}</span>
      </div>
      <div className="get-operations">
        <ListItemIcon className="get-icons-list">
          <AddAlertOutlinedIcon />
          <PersonAddAltIcon />
          <ColorLensOutlinedIcon />
          <CollectionsOutlinedIcon />
          <ArchiveOutlinedIcon onClick={()=> handleIconsClick("archive")}/>
          <MoreVertIcon />
        </ListItemIcon>
      </div>
    </div>
  );
};

export default NoteCard;
