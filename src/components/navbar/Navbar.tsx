import "./navbar.scss";
import SearchIcon from "../../imges/search.svg?react"; // Import SVG as React component
import AppIcon from "../../imges/app.svg?react";       // Import SVG as React component
import ExpandIcon from "../../imges/expand.svg?react";       // Static asset
import NotificationsIcon from "../../imges/notifications.svg?react"; // Static asset
import SettingsIcon from "../../imges/setting.svg?react";   // Static asset

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
        <span>dashboard</span>
      </div>
      <div className="icons">
        {/* Use imported SVG components */}
        <SearchIcon className="icon" />
        <AppIcon className="icon"  />
        
        {/* Use static image imports */}
        <ExpandIcon  className="icon" />
        
        <div className="notification">
          <NotificationsIcon />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="User"
          />
          <span>Jane</span>
        </div>

        <SettingsIcon className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
