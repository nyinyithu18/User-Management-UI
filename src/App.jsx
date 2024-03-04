import React, { useState } from "react";
import UserList from "./components/users/UserList";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import RoleList from "./components/roles/RoleList";
import SidebarPage from "./components/sidebar/SidebarPage";
import UserCreate from "./components/users/UserCreate";
import RoleCreate from "./components/roles/RoleCreate";
import PageNotFound from "./components/page-not-found/PageNotFound";

const App = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  let style = {
    marginLeft: '63px',
    width: '100%'
  }

  let stylewidth = {
    marginLeft: '208px',
    width: '100%'
  }

  return (
    <>
      <div className="flex">
        <div className="fixed">
          <SidebarPage
            sidebarExpanded={sidebarExpanded}
            toggleSidebar={toggleSidebar}
          />
        </div>

        <div style={sidebarExpanded == false ? style : stylewidth}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/userCreate" element={<UserCreate />} />
            <Route path="/roles" element={<RoleList />} />
            <Route path="/roles/roleCreate" element={<RoleCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
