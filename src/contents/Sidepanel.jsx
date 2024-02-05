import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ListItemIcon from "@mui/material/ListItemIcon";
import "../styles/Sidepanel.scss";

const Sidepanel = ({state, setState}) => {

    const handleToggle = () => {
        setState(!state);
      }
    

  return (
    
    <div className="sidediv" onClick={handleToggle}>
      <ListItemIcon className="side-icons">
        <div>
          <LightbulbIcon />
        </div>
        <div>
          <NotificationsNoneIcon />
        </div>
        <div>
          <EditIcon />
        </div>
        <div>
          <ArchiveIcon />
        </div>
        <div>
          <DeleteOutlineIcon />
        </div>
      </ListItemIcon>
    </div>
  );
};

export default Sidepanel;
