import { React, useState, useEffect } from "react";
import "./Admin.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

function Admin() {
  const [allEmployees, setAllEmployees] = useState([]);
  // api call
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/getAllEmployee");
    setAllEmployees(result.data.employees);
  };

  const handleDelete=async (id)=>{
    const result = await axios.delete("http://localhost:8000/deleteEmployee/"+id)
    alert(result.data.message)
    fetchData()
  }

  console.log(allEmployees);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-end me-3 mt-2">
        <Link to={"/add"}>
          <Button className="ms-3 rounded" variant="success">
            <i class="fa-solid fa-user-plus"></i> Add Employee
          </Button>
        </Link>
      </div>
      <h1 className="mt-5 text-center">
        {" "}
        <strong> Employee Management App</strong>
        <i class="fa-solid fa-people-line ms-3"></i>
      </h1>

      <h2 className="mt-2 text-center">Onboarding with ease</h2>
      <p className="mt-1 text-center">
        Employee Management Software tools are designed to simplify the
        administrative tasks in an organization. There are hundreds of niche
        areas and sub-functions that are associated with EMS tools. Many times,
        these tools are also dubbed as Project Management Software or Enterprise
        Resource Planning systems.{" "}
      </p>

      <Table
        striped
        bordered
        hover
        variant="dark"
        className="container w-75 border border-info"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees?.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.uname}</td>
              <td>{item.age}</td>
              <td>{item.designation}</td>
              <td>{item.salary}</td>
              <td>
                <Link to={'edit/'+item.id}>
                <Button
                  
                  className="ms-3 rounded"
                  variant="success"
                >
                  {" "}
                  <i class="fa-solid fa-user-pen"></i> Edit
                </Button>
                </Link>
                <Button className="ms-3 rounded" variant="info">
                  {" "}
                  <i class="fa-solid fa-eye"></i> View
                </Button>
                <Button onClick={() => handleDelete(item.id)} className="ms-3 rounded" variant="danger">
                  {" "}
                  <i class="fa-solid fa-user-xmark"></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Admin;
