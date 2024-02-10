import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Popper from "@mui/material/Popper";


const Header = ({state, setState}) => {

  const navigate = useNavigate();

  const [anchorMenu, setAnchorMenu] = useState(null);
  const openOption = Boolean(anchorMenu);
  const userPopper = openOption ? "simple-popper" : undefined;

  const handleToggle = () => {
    setState(!state);
  }
  const handleMenu = (userPopper) => {
    setAnchorMenu(anchorMenu ? null : userPopper.currentTarget);
  };

  const handleSignOut = ()=>{
    localStorage.clear();
    navigate("/signin")
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
            <Person2Icon aria-describedby={userPopper} onClick={handleMenu}/>
          </div>
        </ListItemIcon>
      </div>

      <Popper id={userPopper} open={openOption} anchorEl={anchorMenu}>
        <div className="signout">
          <p onClick={handleSignOut}>Sign Out</p>
        </div>
      </Popper>

    </div>
  );
};

export default Header;
