import {React,useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import uuid from "react-uuid";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";


function Add() {


  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)
  

useEffect(()=>{
  setId(uuid().slice(0,3))
},[])

// create an object for the hook
let location=useNavigate()

 const addEmployee=async(e)=>{

  setId(uuid().slice(0,3));
const body={
  id,
  uname,
  age,
  designation:desig,
  salary
}

const result= await axios.post('http://localhost:8000/addEmployee',body)
alert(result.data.message)
// redirection to home page
location('/')
  // console.log(body);
  
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
        <div className="text-center">
        <Button onClick={(e)=>addEmployee(e)} variant="info" className="ms-5 rounded border mb-2">Add</Button>
        <Link to={'/'}>
        <Button variant="warning" className="ms-5 rounded border mb-2">Cancel</Button>
        </Link>
        </div>
      </Form>
    </div>
  );
}

export default Add;
