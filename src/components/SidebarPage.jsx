import React from "react";
import { Sidebar } from "flowbite-react";
import { HiViewBoards, HiUser, HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const SidebarPage = () => {
  return (
    <div style={{ height: "100vh", width: "307px" }} className="bg-slate-200">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <h1 className="mb-4 mt-4 ms-10 font-bold text-xl">Pico SBS</h1>
            <Sidebar.Item href="#" icon={HiHome}>
                <Link to="/">Home</Link>
              </Sidebar.Item>
            <Sidebar.Collapse icon={HiUser} label="Users">
              <Sidebar.Item>
                <Link to="/userList">Users List</Link>
              </Sidebar.Item>
              <Sidebar.Item href="#">Create User</Sidebar.Item>
              <Sidebar.Item href="#">Import Users</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiViewBoards} label="Roles">
              <Sidebar.Item href="#">Roles List</Sidebar.Item>
              <Sidebar.Item href="#">Create Role</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarPage;
