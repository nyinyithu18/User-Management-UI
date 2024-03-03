import {
  Button,
  Table,
  TextInput,
  Dropdown,
  Select,
  Pagination,
  Breadcrumb,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { roleListDatas } from "../../utils/data";

const RoleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = () => setCurrentPage(3);

  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    setRoleList(roleListDatas);
  }, []);

  return (
    <div className="w-full">
      <div className="h-full bg-slate-300 pb-5">
        <h1 className="font-bold text-2xl pt-4 ms-7">Roles List</h1>
        <Breadcrumb aria-label="Default" className="ms-7 mb-6">
          <Breadcrumb.Item>
            <Link to="/roles" className="hover:text-slate-800">
              Roles
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-4 mx-7 bg-white p-7 rounded-md">
          <div className="flex justify-between mb-6 mt-3">
            <TextInput
              className="w-52 sm:w-60 lg:w-96"
              type="search"
              placeholder="Search RoleName..."
              onChange={(e) =>
                setRoleList(
                  roleListDatas.filter((f) =>
                    f.role.toLowerCase().includes(e.target.value)
                  )
                )
              }
            />
            <Button type="button" color="dark">
              <Link to="/roles/roleCreate">Create Role</Link>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head className="text-md bg-slate-100">
                <Table.HeadCell>ROLE</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {roleList.length > 0 ? (
                  roleList.map((roles, index) => {
                    return (
                      <Table.Row
                        key={index}
                        className="bg-slate-50 hover:bg-slate-100"
                      >
                        <Table.Cell className="whitespace-nowrap">
                          {roles.role}
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

export default RoleList;
