import React,{useState,useEffect} from 'react';
import {Button} from 'react-bootstrap';
import Footer from '../footer';
import Sidebar from '..//sidebar';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Departement() {
    const [data,setData]=useState();
    const getDep=()=>{
        axios.get('http://127.0.0.1:8000/api/deps').then((res)=>{
            setData(res.data.dep);
        })
    }
    useEffect(()=>{
        getDep();
    },[]);
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
                    <h3>{}</h3>
                    <p>Departements</p>
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
        <h3 className="card-title">Liste Departements</h3>
        </div>
        
        <div className="card-body">
        <table id="example1" className="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Id Employe</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.id_employe}</td>
                    <td>
                    
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

