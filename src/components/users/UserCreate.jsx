import React from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

const UserCreate = () => {
  return (
    <div className="w-full">
      <div className="h-full bg-slate-300">
        <h1 className="font-bold text-2xl pt-4 ms-7">Create User</h1>
        <div className="mt-4 mx-7 bg-white p-7 rounded-md">
          <h1 className="font-bold text-lg mb-2">User Information</h1>
          <form className="gap-4">
            <div className="lg:flex justify-between">
              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="prefix" value="Prefix:" />
                </div>
                <TextInput
                  className="lg:w-60"
                  id="prefix"
                  type="text"
                  placeholder="Mr / Mrs /Miss"
                  required
                  shadow
                />
              </div>
              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  className="lg:w-96"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  className="lg:w-96"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  shadow
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="username@domain.xyz"
                required
                shadow
              />
            </div>
          </form>
          <div>
            <div className="mt-7 flex">
              <div className="mt-3 me-4">
                <Checkbox />
              </div>
              <div>
                <p className="font-medium">Is Active?</p>
                <p>User account is activate or deactivate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mx-7 bg-white p-7 rounded-md">
          <h1 className="font-bold text-lg mb-2">Role & Permissions</h1>
          <form className="gap-4">
            <div className="">
              <div className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  placeholder="First Name"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="rolename" value="Role Name" />
                </div>
                <Select id="rolename" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 mx-7">
          <Button color="dark">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
