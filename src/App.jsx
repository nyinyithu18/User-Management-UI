import React from "react";
import UserList from "./components/users/UserList";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import RoleList from "./components/roles/RoleList";
import SidebarPage from "./components/sidebar/SidebarPage";
import UserCreate from "./components/users/UserCreate";

const App = () => {
  return (
    <>
      <div className="flex">
        <SidebarPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/users/userCreate" element={<UserCreate />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
