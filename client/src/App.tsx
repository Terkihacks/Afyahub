import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route 
          path="/userdashboard/*" 
          element={
            <ProtectedRoute requiredRole="employee">
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route 
          path="/admindashboard/*"	 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

const NavbarWrapper = () => {
  const location = useLocation();
  // Check if the current path starts with these routes
  const shouldHideNavbar = location.pathname.startsWith('/userdashboard') || 
                          location.pathname.startsWith('/admindashboard');

  return shouldHideNavbar ? null : <Navbar />;
};

export default App;
