 
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 
import Loading from './Loading'
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
 
 
 

function AdminNavigation() {
  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<AdminLogin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
           
    </Routes>
  </BrowserRouter>
  );
}

export default AdminNavigation;
