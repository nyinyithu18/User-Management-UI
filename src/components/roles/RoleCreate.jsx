import { Button, Checkbox, Label, TextInput, Breadcrumb } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const RoleCreate = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-300 h-screen">
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
              <Label
                htmlFor="rolename"
                value="Role Name"
                className="text-md font-normal"
              />
            </div>
            <TextInput
              id="rolename"
              type="text"
              placeholder="Enter a role name"
              required
              shadow
            />
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-7">
              <p className="font-medium">Administrator Access</p>
              <div className="flex items-center gap-2">
                <Checkbox id="All" style={{ width: "20px", height: "20px" }} />
                <Label htmlFor="All" className="text-md font-normal">
                  Select All
                </Label>
              </div>
            </div>
            <div className="mb-5 mt-6 flex">
              <h1 style={{ marginRight: "149px" }} className="font-normal">
                User
              </h1>
              <div className="flex ">
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
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="View"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="View" className="text-md font-normal">
                    View
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Create"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Create" className="text-md font-normal">
                    Create
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Update"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Update" className="text-md font-normal">
                    Update
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Delete"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Delete" className="text-md font-normal">
                    Delete
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Import"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Import" className="text-md font-normal">
                    Import
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Export"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Export" className="text-md font-normal">
                    Export
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Print"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Print" className="text-md font-normal">
                    Print
                  </Label>
                </div>
              </div>
            </div>
            <div className="mb-5 flex">
              <h1 style={{ marginRight: "149px" }} className="font-normal">
                Role
              </h1>
              <div className="flex ">
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
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="View"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="View" className="text-md font-normal">
                    View
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Create"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Create" className="text-md font-normal">
                    Create
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Update"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Update" className="text-md font-normal">
                    Update
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Delete"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Delete" className="text-md font-normal">
                    Delete
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Import"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Import" className="text-md font-normal">
                    Import
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Export"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Export" className="text-md font-normal">
                    Export
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Print"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Print" className="text-md font-normal">
                    Print
                  </Label>
                </div>
              </div>
            </div>
            <div className="mb-5 flex">
              <h1 style={{ marginRight: "120px" }} className="font-normal">
                Supplier
              </h1>
              <div className="flex ">
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
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="View"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="View" className="text-md font-normal">
                    View
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Create"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Create" className="text-md font-normal">
                    Create
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Update"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Update" className="text-md font-normal">
                    Update
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Delete"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Delete" className="text-md font-normal">
                    Delete
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Import"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Import" className="text-md font-normal">
                    Import
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Export"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Export" className="text-md font-normal">
                    Export
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Print"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Print" className="text-md font-normal">
                    Print
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex mb-5">
              <h1 style={{ marginRight: "110px" }} className="font-normal">
                Customer
              </h1>
              <div className="flex ">
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
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="View"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="View" className="text-md font-normal">
                    View
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Create"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Create" className="text-md font-normal">
                    Create
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Update"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Update" className="text-md font-normal">
                    Update
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Delete"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Delete" className="text-md font-normal">
                    Delete
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Import"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Import" className="text-md font-normal">
                    Import
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Export"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Export" className="text-md font-normal">
                    Export
                  </Label>
                </div>
                <div className="flex items-center me-5 gap-2">
                  <Checkbox
                    id="Print"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <Label htmlFor="Print" className="text-md font-normal">
                    Print
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button color="dark">Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCreate;
