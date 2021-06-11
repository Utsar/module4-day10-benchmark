import React from "react";
import "./sidebar.css";
import SpotifyLogo from "../Assets/Spotify_Logo_RGB_White.png";
import SidebarLinks from "./SidebarLinks";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarButtons from "./SidebarButtons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src={SpotifyLogo}
        alt="Spotify sidebar logo"
      />
      <SidebarLinks Icon={HomeIcon} link={"Home"} />
      <SidebarLinks Icon={SearchIcon} link={"Search"} />
      <SidebarLinks Icon={LibraryMusicIcon} link={"Your Library"} />
    </div>
  );
};

export default Sidebar;
