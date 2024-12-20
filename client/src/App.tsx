import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
