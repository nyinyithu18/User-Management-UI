import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TextInput,
  Dropdown,
  Pagination,
  Select,
  Breadcrumb,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { userDatas } from "../../utils/data";

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = () => setCurrentPage(1);

  const [userDatasList, setUserDatasList] = useState([]);

  useEffect(() => {
    setUserDatasList(userDatas);
  }, []);

  return (
    <div className="w-full">
      <div className="h-auto pb-6 bg-slate-300">
        <h1 className="font-bold text-2xl pt-4 ms-7">User List</h1>
        <Breadcrumb aria-label="Default" className="ms-7 mb-6">
          <Breadcrumb.Item>
            <Link to="/users" className="hover:text-slate-800">
              Users
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mx-7 bg-white p-7 rounded-md">
          <div className="md:flex justify-between mb-6 mt-3">
            <TextInput
              className="w-64"
              type="search"
              placeholder="Search Username... / Role..."
              onChange={(e) =>
                setUserDatasList(
                  userDatas.filter(
                    (f) =>
                      f.username.toLowerCase().includes(e.target.value) ||
                      f.role.toLowerCase().includes(e.target.value)
                  )
                )
              }
            />
            <div className="flex mt-3 md:mt-0">
              <Button type="button" className="me-8 w-20 " color="gray">
                Filter
              </Button>
              <Button type="button" color="dark">
                <Link to="/users/userCreate">Create User</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head className="text-md bg-slate-100">
                <Table.HeadCell>UserName</Table.HeadCell>
                <Table.HeadCell>Role</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Activity</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {userDatasList.length > 0 ? (
                  userDatasList.map((user, index) => {
                    return (
                      <Table.Row
                        key={index}
                        className="bg-slate-50 hover:bg-slate-100"
                      >
                        <Table.Cell className="whitespace-nowrap">
                          {user.username}
                        </Table.Cell>
                        <Table.Cell>{user.role}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>
                          {user.status == "true" ? (
                            <p className="bg-green-400 w-16 text-white rounded-xl text-center">
                              Active
                            </p>
                          ) : (
                            <p className="bg-red-400 w-16 text-white rounded-xl text-center">
                              Inactive
                            </p>
                          )}
                        </Table.Cell>
                        <Table.Cell>
                          <Dropdown label="Action" inline>
                            <Dropdown.Item>View</Dropdown.Item>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Delete</Dropdown.Item>
                          </Dropdown>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
                ) : (
                  <Table.Row className="bg-slate-50 hover:bg-slate-100">
                    <Table.Cell className="whitespace-nowrap">
                      No Data
                    </Table.Cell>
                    <Table.Cell>No Data</Table.Cell>
                    <Table.Cell>No Data</Table.Cell>
                    <Table.Cell>No Data</Table.Cell>
                    <Table.Cell>No Data</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
          <div className="mt-5 mb-2 flex justify-between">
            <Select className="w-20 mt-2">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Select>

            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={2}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
