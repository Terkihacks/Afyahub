import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';



const App = () => {
  
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
        <Route path ="/userdashboard" element={<Dashboard/>} />
        <Route path ="/admindashboard" element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
