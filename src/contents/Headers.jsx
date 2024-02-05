import React from "react";
import "../styles/Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import DnsIcon from "@mui/icons-material/Dns";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import AppsIcon from "@mui/icons-material/Apps";
import keepLogo from "../assets/logo.png";
import ListItemIcon from "@mui/material/ListItemIcon";

const Header = ({state, setState}) => {

  const handleToggle = () => {
    setState(!state);
  }
  
  return (
    <div className="header">
      <div className="header1">
        <ListItemIcon className="togglediv">
          <MenuIcon className="menuicon" onClick={handleToggle} />
        </ListItemIcon>
        <div>
          <img
            style={{ height: "30px" }}
            className="fundologo"
            src={keepLogo}
            alt="fundoo"
          />
        </div>
        <div>
          <span className="span">Fundoo</span>
        </div>
      </div>
      <div className="header2">
        <div className="icon1">
          <ListItemIcon><SearchIcon /></ListItemIcon>
        </div>
        <div className="searchdiv">
          <input
            className="searchinput"
            type="search"
            name="q"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="header3">
        <ListItemIcon className="icon-left">
          <div>
            <RefreshIcon />
          </div>
          <div>
            <DnsIcon />
          </div>
          <div>
            <SettingsIcon />
          </div>
        </ListItemIcon>
        <ListItemIcon className="icon-right">
          <div>
            <AppsIcon />
          </div>
          <div>
            <Person2Icon />
          </div>
        </ListItemIcon>
      </div>
    </div>
  );
};

export default Header;
