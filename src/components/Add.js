import {React,useState} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Add() {


  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

// 

 const addEmployee=(e)=>{
  console.log(uname);
  console.log(age);
 }

  return (
    <div>
      <h3 className="mt-5 text-center">
        {" "}
        <strong> Add Employee</strong>
        <i class="fa-solid fa-user-plus ms-3"></i>
      </h3>

      <h2 className="mt-2 text-center">Onboarding with ease</h2>
      <p className="mt-1 text-center">
        Employee Management Software tools are designed to simplify the
        administrative tasks in an organization. There are hundreds of niche
        areas and sub-functions that are associated with EMS tools. Many times,
        these tools are also dubbed as Project Management Software or Enterprise
        Resource Planning systems.{" "}
      </p>

      <Form className="w-75 container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={(e)=>setUname(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Designation</Form.Label>
          <Form.Control onChange={(e)=>setDesig(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Salary</Form.Label>
          <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="" />
        </Form.Group>
        <Button onClick={(e)=>addEmployee(e)} variant="info" className="ms-5 rounded ">Add</Button>
        <Button variant="warning" className="ms-5 rounded ">Cancel</Button>
      </Form>
    </div>
  );
}

export default Add;
