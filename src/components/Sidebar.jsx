import React from "react";
import { Navbar, Search } from "./index";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
