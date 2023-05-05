import Dashboard from './components/dashboardd'
import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import CreateEmp from './components/createEmp';
import EditEmp from './components/editEmp';
import Show from './components/showEmploye';
import Register from './components/register';
import Login from './components/login';
import Departement from './components/departement/departement';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/emp" element={<Dashboard/>}></Route>
        <Route path="/create" element={<CreateEmp/>}></Route>
        <Route path="/edit/:id" element={<EditEmp />}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
        <Route path="/dep" element={<Departement />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
