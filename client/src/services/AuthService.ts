import axios from 'axios';

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
  const API_URL = 'http://localhost:5500/employee/register';
  const res = await axios.post(API_URL, employeeData);
  return res.data;
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
  const API_URL = 'http://localhost:5500/employee/login';
  const res = await axios.post(API_URL, loginData);
  return res.data;
};

// Update employee
export const updateEmployee = async (employeeData: { 
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  department?: string;
  specialization?: string;
  password?: string;
}) => {
  const API_URL = 'http://localhost:5000/employee/update';
  const res = await axios.post(API_URL, employeeData);
  return res.data;
};

// Delete employee
export const deleteEmployee = async (employeeId: string) => {
  const API_URL = `http://localhost:5000/employee/delete/${employeeId}`;
  const res = await axios.delete(API_URL);
  return res.data;
};