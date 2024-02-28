import React from "react";
import { Table } from "flowbite-react";

const UserList = () => {
  return (
    <div className="w-full bg-slate-300">
      <h1 className="font-bold text-2xl mt-7 ms-7">User List</h1>
      <div className="overflow-x-auto mt-4 mx-7">
        <Table className="">
          <Table.Head className="text-md bg-slate-100">
            <Table.HeadCell>UserName</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>FullName</Table.HeadCell>
            <Table.HeadCell>Activity</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-slate-50 hover:bg-slate-100">
              <Table.Cell className="whitespace-nowrap">
                Apple MacBook Pro 17
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>...</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
