import React, { useState } from "react";
import { createNote } from "../utils/HttpService";
import "../styles/CreateNote.scss";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ListItemIcon from "@mui/material/ListItemIcon";

function CreateNote({updateNotesList}) {

  let Title, Description;

  const [expand, setExpanded] = useState(false);

  const handleCloseClick = async (expanded) => {
    if (expanded){
       const res=await createNote("/Notes", { Title, Description });
      updateNotesList({operation:"add",data:res.data.data});
    }
    setExpanded(!expand);
  };

  return (
    <>
      <div className="create-note">
        {expand ? (
          <div className="open-take-note-cnt">
            <div className="title-div">
              <input
                className="title"
                type="text"
                placeholder="Title"
                onChange={(e) => (Title = e.target.value)}
              />
            </div>
            <div>
              <input
                className="take-a-note"
                type="text"
                placeholder="Take a Note..."
                onChange={(e) => (Description = e.target.value)}
              />
              <div className="operations">
                <ListItemIcon className="icons-list">
                  <AddAlertOutlinedIcon />
                  <PersonAddAltIcon />
                  <ColorLensOutlinedIcon />
                  <CollectionsOutlinedIcon />
                  <ArchiveOutlinedIcon />
                  <MoreVertIcon />
                  <UndoIcon />
                  <RedoIcon />
                </ListItemIcon>
                <button
                  className="close-button"
                  type="text"
                  onClick={() => handleCloseClick(true)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="close-take-note-cnt"
            onClick={() => handleCloseClick(false)}
          >
            <input
              className="take-a-note"
              type="text"
              placeholder="Take a Note..."
            />
            <div>
              <ListItemIcon className="icons-list-2">
                <CheckBoxOutlinedIcon />
                <BrushOutlinedIcon />
                <CollectionsOutlinedIcon />
              </ListItemIcon>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default CreateNote;
