import { Button, Checkbox, Label, TextInput, Breadcrumb } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { rolePermissions } from "../../utils/data";

const RoleCreate = () => {
  const [roleName, setRoleName] = useState("");
  const [roleNameError, setRoleNameError] = useState("");

  const handleRoleName = (event) => {
    const { value } = event.target;
    setRoleName(value);
    if (!roleName.trim()) {
      setRoleNameError("Role Name is required");
    } else {
      setRoleNameError("");
    }
  };

  const handleInputDatas = () => {
    if (!roleName) {
      setRoleNameError(!roleName ? "Role Name is required" : "");
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="bg-slate-300 h-auto pb-5">
        <h1 className="font-bold text-2xl pt-4 ms-7">Roles List</h1>
        <Breadcrumb aria-label="Default" className="ms-7 mb-6">
          <Breadcrumb.Item>
            <Link to="/roles" className="hover:text-slate-800">
              Roles List
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/roles/roleCreate" className="hover:text-slate-800">
              Create
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 mx-7 bg-white p-7 rounded-md">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="rolename" className="text-md font-normal">
                Role Name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="rolename"
              type="text"
              onChange={handleRoleName}
              placeholder="Enter a role name"
              required
              shadow
            />
            {roleNameError && (
              <div className="text-red-500">{roleNameError}</div>
            )}
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-10 mb-6 mt-2">
              <p className="font-medium">Administrator Access</p>
              <div className="flex items-center gap-2">
                <Checkbox style={{ width: "20px", height: "20px" }} />
                <Label className="text-md font-normal">Select All</Label>
              </div>
            </div>

            {rolePermissions.map((roles, index) => {
              return (
                <div key={index} className="flex mb-5">
                  <div className="min-w-48">
                    <h1 className="font-normal">{roles.name}</h1>
                  </div>
                  <div className="flex">
                    <div className="flex items-center me-5 gap-2">
                      <Checkbox
                        id="all"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <Label
                        htmlFor="all"
                        className="text-md font-normal whitespace-nowrap"
                      >
                        Select All
                      </Label>
                    </div>
                    {roles.permissions.map((permission, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center me-5 gap-2"
                        >
                          <Checkbox style={{ width: "20px", height: "20px" }} />
                          <Label className="text-md font-normal">
                            {permission}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6">
            <Button onClick={handleInputDatas} color="dark">
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCreate;
