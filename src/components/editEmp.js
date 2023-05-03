import React,{useState, useEffect,useRef} from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar';

export default function EditEmp() {
    const {id}=useParams()
    const history = useNavigate();
    const [employe,setEmploye] = useState([]);
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [age,setAge] = useState(null);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=()=>{
        axios.get(`http://127.0.0.1:8000/api/employees/${id}`).then((res)=>setEmploye(res.data.employe)) 
    }

    const editEmp=async(e)=>{
        e.preventDefault();
        const res = await axios.put('http://127.0.0.1:8000/api/employees/'+id,{
          "nom":nom,
          "prenom":prenom,
          "age":age
        });
        console.log(res.data.employees);
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
            <Link to={{pathname:'/emp'}}><h3 class="card-title"><i class="fa-solid fa-backward" style={{marginRight:'0.9em'}}></i>Editer Employee</h3></Link>
            </div>
            <form onSubmit={editEmp}>
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
                <button type="submit" class="btn btn-primary">Enregister</button>
              </div>
              </form>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}
