import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function depCreate() {
  const history = useNavigate();
  const [emp,setEmp] = useState();
  const [nom,setNom] = useState();
  const [idEmploye,setIdEmploye] = useState();
  
  const EmpData=()=>{
    axios.get('http://127.0.0.1:8000/api/employees').then( (res) => setEmp(res.data.employees) );
  } 

  useEffect(()=>{
    EmpData();
  },[])

  depCreate=async(e)=>{
      e.preventDefault();
      await axios.post('http://localhost:8000/api/deps',{nom,idEmploye});
      history('/dep');
  }
  return (
    <>
    <Sidebar />
    <div class="container-fluid">
      <div class="row" style={{justifyContent:"center",marginTop:'20px'}}>
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <Link to={{pathname:'/emp'}}><h3 class="card-title"><i class="fa-solid fa-backward" style={{marginRight:'0.9em'}}></i>Ajouter Departement</h3></Link>
            </div>
            <form onSubmit={depCreate}>
              <div class="card-body">
                <div class="form-group">
                  <label for="nom">Nom</label>
                  <input type="text" class="form-control" name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="idEmploye">Employee</label>
                  <select class="form-select" nom="id_employe">
                    <option selected>------Id Employee-----</option>
                    {emp.map((emp)=>{
                        <option value={emp.id}>{emp.nom}</option>
                    })}
                  </select>
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
