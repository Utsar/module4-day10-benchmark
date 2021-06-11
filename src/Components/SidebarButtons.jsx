import React from "react";
import { Button } from "react-bootstrap";
import "./sidebarButtons.css";

const SidebarButtons = ({ title }) => {
  return (
    <div className="sidebarButtons">
      <Button className="buttons" variant="light">
        {title}
      </Button>
    </div>
  );
};

export default SidebarButtons;
