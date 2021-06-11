import React from "react";
import "./sidebarLinks.css";

const SidebarLinks = ({ link, Icon, Button }) => {
  return (
    <div className="sidebarLinks">
      {Icon && <Icon className="sidebarLinksIcon" />}
      {Icon ? <h4>{link}</h4> : <p>{link}</p>}
    </div>
  );
};

export default SidebarLinks;
