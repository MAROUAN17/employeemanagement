import React,{useState,useEffect} from 'react'
import NavBar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

export default function Show() {
    const {id} = useParams();
    const [employe,setEmploye]=useState([])

    useEffect(()=>{
      getEmp();
    },[])

    const getEmp=()=>{
        axios.get(`http://127.0.0.1:8000/api/employees/`+id).then((res)=>setEmploye(res.data.employe));
    }

  return (
<body class="hold-transition sidebar-mini">
<div class="wrapper">
  <Sidebar />
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Employer Profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
            
            <div class="card card-primary card-outline" style={{width:"15em"}}>
            <Link to={{pathname:'/emp'}}><i class="fa-solid fa-arrow-left" style={{marginLeft:'0.5em'}}></i></Link>
              <div class="card-body box-profile">
                <div class="text-center">
                  <img class="profile-user-img img-fluid img-circle"
                       src="../../dist/img/user4-128x128.jpg"
                       alt="User profile picture" />
                </div>

                <h3 class="profile-username text-center">{employe.nom}</h3>

                <p class="text-muted text-center">Software Engineer,{employe.age}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b> <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b> <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b> <a class="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block"><b>Add Project</b></a>
              </div>
            </div>
           
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About {employe.nom}</h3>
              </div>
              <div class="card-body">
                <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted">
                  B.S. in Computer Science from the University of Tennessee at Knoxville
                </p>

                <hr/>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">Malibu, California</p>

                <hr/>

                <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                <p class="text-muted">
                  <span class="tag tag-danger">UI Design</span>
                  <span class="tag tag-success">Coding</span>
                  <span class="tag tag-info">Javascript</span>
                  <span class="tag tag-warning">PHP</span>
                  <span class="tag tag-primary">Node.js</span>
                </p>

                <hr/>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
<Footer/>
    </div>
  </body>
)}