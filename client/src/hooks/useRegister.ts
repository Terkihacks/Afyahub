import { useState } from "react";
import { registrationTypes } from "../types/appTypes";
import { createEmployee } from "../services/AuthService";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: registrationTypes) => {
    setLoading(true);
    setError(null);
    try {
      const newEmployee = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        department: data.department,
        specialization: data.specialization,
        password: data.password,
      };

      const createdEmployee = await createEmployee(newEmployee);
      setLoading(false);
      return createdEmployee;
    } catch (error) {
      setLoading(false);
      if (error) {
        setError('Registration failed');
      }
    }
  };

  return { register, loading, error };
};

export default useRegister;