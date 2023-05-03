import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const history = useNavigate();

    const createReg=async(e)=>{
      e.preventDefault();
      const res = await axios.post('http://localhost:8000/api/register', 
        {name,email,password});
      history('/');
    }

  return (
<div class="container-fluid">
    <div class="row" style={{justifyContent:"center",marginTop:'20px'}}>
    <div class="col-md-6">
        <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Sign up</h3>
        </div>
        <div class="card-body">
        <form onSubmit={createReg}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>            
            <div class='submit-button'>
                <button type="submit" class='btn btn-primary'>Submit</button> 
            </div>
        </form>
        </div>
        </div>
        </div>
    </div>
</div>
  )
}
