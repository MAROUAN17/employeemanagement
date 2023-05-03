import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError]=useState();
    const history = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login',{email,password}).then((res) => {
            console.log(res.data.status)
            if(res.data.status==false){
                setError(res.data.message);
            }
            else if(res.data.status==true){
                history('/emp');
            }
        })
    }

  return (
<div className='container'>
  <div class="container-fluid">
   <div class="row" style={{justifyContent:"center",marginTop:'20px'}}>
    <div class="col-md-6">
     <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Sign in</h3>
        </div>
        <div class="card-body">
            <form onSubmit={handleSubmit}>
            <p style={{color: 'red'}}>{error}</p>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div class="btn-submit">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div>
                <p>If you don't have an account please <a href="/signup">sign up</a></p>
            </div>
            </form>
        </div>
     </div>
    </div>
   </div>
  </div>
</div>
  )
}
