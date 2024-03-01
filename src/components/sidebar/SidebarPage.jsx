import React, { useState } from "react";
import { LayoutDashboard, UserCircle, Home } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Link } from "react-router-dom";

const SidebarPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className={sidebarExpanded == false ? "w-16" : "w-52"}>
      <Sidebar expanded={sidebarExpanded} onToggle={toggleSidebar}>
        <Link to="/">
          <SidebarItem icon={<Home size={20} />} text="Home" />
        </Link>
        <Link to="/users">
          <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        </Link>
        <Link to='roles'>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Roles" />
        </Link>
      </Sidebar>
    </div>
  );
};
export default SidebarPage;
