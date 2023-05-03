import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom';
import Sidebar from './sidebar'
import axios from 'axios';

export default function CreateEmp() {
  const history = useNavigate();
  const [nom,setNom] = useState();
  const [prenom,setPrenom] = useState();
  const [age,setAge] = useState();

  CreateEmp=async(e)=>{
      e.preventDefault();
      const res = await axios.post('http://localhost:8000/api/employees',{nom,prenom,age});
      history('/emp');
  }
    
  return (
    <>
    <Sidebar />
    <div class="container-fluid">
      <div class="row" style={{justifyContent:"center",marginTop:'20px'}}>
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <Link to={{pathname:'/emp'}}><h3 class="card-title"><i class="fa-solid fa-backward" style={{marginRight:'0.9em'}}></i>Ajouter Employee</h3></Link>
            </div>
            <form onSubmit={CreateEmp}>
              <div class="card-body">
                <div class="form-group">
                  <label for="nom">Nom</label>
                  <input type="text" class="form-control" name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="prenom">Prenom</label>
                  <input type="text" class="form-control" name="prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="age">Age</label>
                  <input type="number" class="form-control" name="age" value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Créer</button>
              </div>
              </form>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}
