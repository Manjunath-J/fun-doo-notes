import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ListItemIcon from "@mui/material/ListItemIcon";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import { update } from "../utils/HttpService";

const EditNoteCnt = (props) => {

  let { onClose, selectedValue, open, id, Title, Description, color, updateNotesList } = props;
  let isArchieved;

  const [changeTitle, setChangeTitle] = useState(Title)
  const [changeDesc, setChangeDesc] = useState(Description)

  const handleArchive = () =>{
    isArchieved=true;
    handleClose();
    updateNotesList({ operation: "archive", data: id })
  }

  const handleClose = () => {
    setChangeDesc(changeDesc)
    setChangeTitle(changeTitle)
    console.log(changeDesc)
    update("/Notes/", id, {Title:changeTitle, Description:changeDesc, isArchieved:isArchieved});
    onClose(selectedValue);
    updateNotesList({operation:"update", data:{_id:id, Title:changeTitle, Description:changeDesc, color:color}})
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <div className="edit-note">
          <div className="open-take-note-cnt">
            <div className="title-div">
              <input
                className="title"
                type="text"
                value={changeTitle}
                onChange={(e) => {
                    setChangeTitle(e.target.value)
                }}
              />
            </div>
            <div>
              <input
                className="take-a-note"
                type="text"
                value={changeDesc}
                onChange={(e) => {
                    setChangeDesc(e.target.value)
                }}
              />
              <div className="operations">
                <ListItemIcon className="icons-list">
                  <AddAlertOutlinedIcon />
                  <PersonAddAltIcon />
                  <ColorLensOutlinedIcon />
                  <CollectionsOutlinedIcon />
                  <ArchiveOutlinedIcon onClick={handleArchive}/>
                  <MoreVertIcon />
                  <UndoIcon />
                  <RedoIcon />
                </ListItemIcon>
                <button
                  className="close-button"
                  type="text"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditNoteCnt;
