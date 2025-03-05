import axios from 'axios';

// Define base API URL based on environment
const API_BASE_URL = import.meta.env.MODE === 'production'
  ? 'https://afyahub-backend.vercel.app'
  : 'http://localhost:5500';

// Create axios instance with enhanced config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Important for CORS
});

// Add request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('employee');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Register a user
export const createEmployee = async (employeeData: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  department: string;
  specialization: string;
  password: string;
}) => {
  // const API_URL = 'http://localhost:5500/employee/register';
  // const res = await axios.post(API_URL, employeeData);
  // return res.data;

  const response = await api.post('/employee/register', employeeData);
  return response.data;

};
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getUser = () => {
  const user = localStorage.getItem('employee');
  return user ? JSON.parse(user) : null;
};

// Login User
export const loginEmployee = async (loginData: { email: string; password: string }) => {
  try {
    // Artificial delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    // const API_URL = 'http://localhost:5500/employee/login';
    // const res = await axios.post(API_URL, loginData);
    const res = await api.post('/employee/login', loginData);
    // console.log('API Response:', res.data);
    if (res.data.token) {
      // Store the token and user data
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('employee', JSON.stringify(res.data.user));
    }
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle server errors
      throw new Error(error.response.data.message || 'Login failed');
    }
    // Handle network errors
    throw new Error('Network error - unable to connect to server');
  }
};

// Update employee
// export const updateEmployee = async (employeeData: { 
//   id: string;
//   first_name?: string;
//   last_name?: string;
//   email?: string;
//   phone?: string;
//   department?: string;
//   specialization?: string;
//   password?: string;
// }) => {
//   const API_URL = 'http://localhost:5000/employee/update';
//   const res = await axios.post(API_URL, employeeData);
//   return res.data;
// };

// // Delete employee
// export const deleteEmployee = async (employeeId: string) => {
//   const API_URL = `http://localhost:5000/employee/delete/${employeeId}`;
//   const res = await axios.delete(API_URL);
//   return res.data;
// };