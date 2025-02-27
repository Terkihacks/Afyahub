import { createContext, ReactNode } from 'react';
import { loginTypes } from '../types/appTypes';
import { useAuth as useAuthHook} from '../hooks/useAuth';

interface AuthContextType {
  login: (credentials: loginTypes) => Promise<{ success: boolean; user: loginTypes}>;
  logout: () => void;
  isAuthenticated: () => boolean;
  getUser: () => void;
  loading: boolean;
  error: string | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();
  return (
    <AuthContext.Provider value ={auth}>
      {children}
    </AuthContext.Provider>
  );
}



