import React, { useState } from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemIcon from "@mui/material/ListItemIcon";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/NoteCard.scss";
import {
  deleteNote,
  isDeleted,
  isarchived,
  update,
} from "../utils/HttpService";
import Popper from "@mui/material/Popper";
import EditNoteCnt from "./EditNoteCnt";

const NoteCard = ({ ele, updateNotesList, deleted = false }) => {

  const [anchorMenu, setAnchorMenu] = useState(null);
  const [anchorColor, setAnchorColor] = useState(null);
  const openOption = Boolean(anchorMenu);
  const openColor = Boolean(anchorColor);
  const color = openColor ? "simple-popper" : undefined;
  const event = openOption ? "simple-popper" : undefined;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  let id = ele._id, Title = ele.Title, Description = ele.Description;

  const handleMenu = (event) => {
    console.log(event);
    setAnchorMenu(anchorMenu ? null : event.currentTarget);
  };

  const handleColor = (color) => {
    console.log(color);
    setAnchorColor(anchorColor ? null : color.currentTarget);
  };

  const handleDelete = () => {
    deleteNote("/Notes/", id);
    updateNotesList({ operation: "trash", data: id });
  };

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
      let color = col;
      update("/Notes/", id, { color });
      updateNotesList({ operation: "color", data: { ...ele, color: col } });
    }
    if (action === "update") {
      updateNotesList({ operation: "update", data: {ele} });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div
      className="getNote-div"
      style={{ backgroundColor: `${ele.color ? ele.color : "#FFFFFF"}` }}
    >
      <div className="get-title-div" onClick={handleClickOpen}>
        <span>{ele.Title}</span>
      </div>
      <div className="get-desc-div" onClick={handleClickOpen}>
        <span>{ele.Description}</span>
      </div>
      {deleted ? (
        <div className="get-operations">
          <ListItemIcon className="get-icons-list">
            <DeleteForeverIcon onClick={handleDelete} />
            <RestoreFromTrashIcon onClick={() => handleIconsClick("trash")} />
          </ListItemIcon>
        </div>
      ) : (
        <div className="get-operations">
          <ListItemIcon className="get-icons-list">
            <AddAlertOutlinedIcon />
            <PersonAddAltIcon />
            <ColorLensOutlinedIcon
              aria-describedby={color}
              onClick={handleColor}
              className="color-btn"
            />
            <CollectionsOutlinedIcon />
            <ArchiveOutlinedIcon onClick={() => handleIconsClick("archive")} />
            <MoreVertIcon aria-describedby={event} onClick={handleMenu} />
          </ListItemIcon>
        </div>
      )}

      <EditNoteCnt
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        id={id} Title={Title} Description={Description}
        updateNotesList={updateNotesList}
      />

      <Popper id={event} open={openOption} anchorEl={anchorMenu}>
        <div className="action-list">
          <p onClick={() => handleIconsClick("trash")}>Delete Note</p>
          <p>Add Label</p>
          <p>Add drawing</p>
          <p>Make a Copy</p>
          <p>Show Checkbox</p>
          <p>Version History</p>
        </div>
      </Popper>

      <Popper id={color} open={openColor} anchorEl={anchorColor}>
        <div className="color-palate-cnt">
          <div
            className="col1"
            mattooltip="Default"
            onClick={() => handleIconsClick("color", "#FFFFFF")}
          ></div>
          <div
            className="col2"
            mattooltip="Coral"
            onClick={() => handleIconsClick("color", "#efbab6")}
          ></div>
          <div
            className="col3"
            mattooltip="Peach"
            onClick={() => handleIconsClick("color", "#f69260")}
          ></div>
          <div
            className="col4"
            mattooltip="Sand"
            onClick={() => handleIconsClick("color", "#ded68e")}
          ></div>
          <div
            className="col5"
            mattooltip="Mint"
            onClick={() => handleIconsClick("color", "#8ebe6a")}
          ></div>
          <div
            className="col6"
            mattooltip="Sage"
            onClick={() => handleIconsClick("color", "#199f7b")}
          ></div>
          <div
            className="col7"
            mattooltip="Fog"
            onClick={() => handleIconsClick("color", "#1f88c5")}
          ></div>
          <div
            className="col8"
            mattooltip="Storm"
            onClick={() => handleIconsClick("color", "#9ed3ef")}
          ></div>
          <div
            className="col9"
            mattooltip="Dusk"
            onClick={() => handleIconsClick("color", "#d296ea")}
          ></div>
          <div
            className="col10"
            mattooltip="Blossom"
            onClick={() => handleIconsClick("color", "#f69e87")}
          ></div>
          <div
            className="col11"
            mattooltip="Clay"
            onClick={() => handleIconsClick("color", "#f1d892")}
          ></div>
          <div
            className="col12"
            mattooltip="Chalk"
            onClick={() => handleIconsClick("color", "#a3a3f6")}
          ></div>
        </div>
      </Popper>
    </div>
  );
};

export default NoteCard;
