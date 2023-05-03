import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap';
import Footer from './footer';
import Sidebar from './sidebar';
import {Link} from 'react-router-dom';
import NavBar from './navbar';
import axios from 'axios';

export default function Dashboard() {
  const [data,setData] = useState([]);

 const fetchData=()=>{
   axios.get('http://127.0.0.1:8000/api/employees').then( (res) => setData(res.data.employees) );
 }

 useEffect(()=>{
  fetchData();
 },[])

 const EmpDelete=async(id)=>{
  await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`);
  fetchData();
 }

return (   
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Dashboard</title>
</head>
<body className="hold-transition sidebar-mini layout-fixed">
<div className="wrapper">
<Sidebar />

          
<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
        </div>
      </div>
  </div>
</div>

<div className="col-lg-6 col-6">
          <div className="small-box bg-info">
              <div className="inner">
                <h3>{data.length}</h3>
                <p>Employees</p>
              </div>
              <div className="icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

<section className="content">
<div className="card">
    <div className="card-header">
      <Link to={{pathname:"/create"}}><Button variant="secondary" size="sm" style={{marginLeft:'70%',width:'100px'}}>CREATE</Button></Link>
      <h3 className="card-title">Liste Employees</h3>
    </div>
    
    <div className="card-body">
      <table id="example1" className="table table-bordered table-striped">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.age}</td>
                <td>
                  <Button type="submit" variant="danger" onClick={()=>EmpDelete(item.id)}><i class="fa-solid fa-trash"></i></Button>
                  <Link to={{pathname:`/edit/${item.id}`}}><Button style={{marginLeft:'0.5em'}} type="submit" variant="success"><i class="fa-solid fa-pen-to-square"></i></Button></Link>
                  <Link to={{pathname:`/show/${item.id}`}}><Button variant="primary" style={{marginLeft:'0.5em'}}><i class="fa-sharp fa-solid fa-eye"></i></Button></Link>
                </td>
            </tr>
         )})}
        </tbody>
      </table>
    </div>
  </div>
</section>

</div>

<Footer />

</div>

</body>
</html>
  )
}
