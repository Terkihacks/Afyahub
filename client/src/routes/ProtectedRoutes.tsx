import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/AuthService';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const authenticated = isAuthenticated();
  const user = JSON.parse(localStorage.getItem('employee') || '{}');

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};