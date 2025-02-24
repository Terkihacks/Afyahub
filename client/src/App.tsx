import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';


const App = () => {
   // Prevent the Navbar from dispalying in the dashboards by using the location hook
   const location = useLocation()
   const hidNavbarRoutes  =  ['/userdashboard', '/admindashboard'];
  return (
    <AuthProvider>
       <Router>
       { !hidNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
        <Route path ="/userdashboard" element={<Dashboard/>} />
        <Route path ="/admindashboard" element={<AdminDashboard/>} />
      </Routes>
    </Router>
    </AuthProvider>
   
  );
};

export default App;
