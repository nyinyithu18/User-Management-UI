import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Breadcrumb,
} from "flowbite-react";
import { Link } from "react-router-dom";

const UserCreate = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [rolename, setRolename] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [rolenameError, setRolenameError] = useState("");

  // First Name validation
  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
    if (!value.trim()) {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
  };

  // Email validation
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (!value.trim()) {
      setEmailError("Email is required");
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  // Username validation
  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
    if (!value.trim()) {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
  };

  const handleInputDatas = () => {
    if (!firstName || !email || !username) {
      setFirstNameError(!firstName ? "First Name is required" : "");
      setEmailError(!email ? "Email is required" : "");
      setUsernameError(!username ? "Username is required" : "");
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="h-auto pb-3 bg-slate-300">
        <h1 className="font-bold text-2xl pt-4 ms-7">Create User</h1>
        <Breadcrumb aria-label="Default" className="ms-7 mb-6">
          <Breadcrumb.Item>
            <Link to="/users" className="hover:text-slate-800">
              Users List
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/userCreate" className="hover:text-slate-800">
              Create
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
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
                  <Label htmlFor="firstName">
                    First Name <span className="text-red-600 text-lg">*</span>
                  </Label>
                </div>
                <TextInput
                  className="lg:w-96"
                  id="firstName"
                  type="text"
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                  required
                  shadow
                />
                {firstNameError && (
                  <div className="text-red-500">{firstNameError}</div>
                )}
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
                <Label htmlFor="email2">
                  Email <span className="text-red-600 text-lg">*</span>
                </Label>
              </div>
              <TextInput
                id="email2"
                type="email"
                onChange={handleEmailChange}
                placeholder="username@domain.xyz"
                required
                shadow
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
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
                  <Label htmlFor="username">
                    Username <span className="text-red-600 text-lg">*</span>
                  </Label>
                </div>
                <TextInput
                  id="username"
                  type="text"
                  onChange={handleUsernameChange}
                  placeholder="Username"
                  required
                  shadow
                />
                {usernameError && (
                  <div className="text-red-500">{usernameError}</div>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="rolename">
                    Role Name <span className="text-red-600 text-lg">*</span>
                  </Label>
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
          <Button onClick={handleInputDatas} color="dark">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
