import React, { useState } from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemIcon from "@mui/material/ListItemIcon";
import "../styles/NoteCard.scss";
import { isDeleted, isarchived, update } from "../utils/HttpService";
import Popper from "@mui/material/Popper";


const NoteCard = ({ ele, updateNotesList }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);


  const handleClick = (event) => {
    console.log(event)
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleColor = (color) => {
    console.log(color)
    setAnchorE2(anchorE2 ? null : color.currentTarget);
  };

  const openOption = Boolean(anchorEl);
  const openColor = Boolean(anchorE2);
  const color = openColor ? "simple-popper" : undefined;
  const event = openOption ? "simple-popper" : undefined;
  let id = ele._id;

  const handleIconsClick = (action, col) => {
    if (action === "archive") {
      isarchived("/Notes/isarch/", id);
      updateNotesList({ operation: "archive", data: id });
    }
    if (action === "trash") {
      isDeleted("/Notes/isdeleted/", id);
      updateNotesList({ operation: "trash", data: id });
    }
    if (action === "color") {
      let color=col
      update("/Notes/",id,{color});
      updateNotesList({ operation: "color", data: {...ele,color:col} });
    }
  };

  return (
    <div className="getNote-div" style={{backgroundColor:`${ele.color ? ele.color:'#FFFFFF'}`}}>
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
          <ColorLensOutlinedIcon aria-describedby={color} onClick={handleColor} className="color-btn"/>
          <CollectionsOutlinedIcon  />
          <ArchiveOutlinedIcon onClick={() => handleIconsClick("archive")} />
          <MoreVertIcon aria-describedby={event} onClick={handleClick} />
        </ListItemIcon>
      </div>
      
      <Popper id={event} open={openOption} anchorEl={anchorEl}>
        <div className="action-list">
          <p onClick={() => handleIconsClick("trash")}>Delete Note</p>
          <p>Add Label</p>
          <p>Add drawing</p>
          <p>Make a Copy</p>
          <p>Show Checkbox</p>
          <p>Version History</p>
        </div>
      </Popper>
      <Popper id={color} open={openColor} anchorEl={anchorE2}>
        <div className="color-palate-cnt">
          <div className="col1" mattooltip="Default" onClick={()=>handleIconsClick("color",'#FFFFFF')}></div>
          <div className="col2" mattooltip="Coral" onClick={()=>handleIconsClick("color",'#efbab6')}></div>
          <div className="col3" mattooltip="Peach" onClick={()=>handleIconsClick("color",'#f69260')}></div>
          <div className="col4" mattooltip="Sand" onClick={()=>handleIconsClick("color",'#ded68e')}></div>
          <div className="col5" mattooltip="Mint" onClick={()=>handleIconsClick("color",'#8ebe6a')}></div>
          <div className="col6" mattooltip="Sage" onClick={()=>handleIconsClick("color",'#199f7b')}></div>
          <div className="col7" mattooltip="Fog" onClick={()=>handleIconsClick("color",'#1f88c5')}></div>
          <div className="col8" mattooltip="Storm" onClick={()=>handleIconsClick("color",'#9ed3ef')}></div>
          <div className="col9" mattooltip="Dusk" onClick={()=>handleIconsClick("color",'#d296ea')}></div>
          <div className="col10" mattooltip="Blossom" onClick={()=>handleIconsClick("color",'#f69e87')}></div>
          <div className="col11" mattooltip="Clay" onClick={()=>handleIconsClick("color",'#f1d892')}></div>
          <div className="col12" mattooltip="Chalk" onClick={()=>handleIconsClick("color",'#a3a3f6')}></div>
        </div>
      </Popper>
    </div>
  );
};

export default NoteCard;
