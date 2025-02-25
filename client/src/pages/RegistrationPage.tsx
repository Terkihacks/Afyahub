import React, { useState } from 'react';
import { registrationTypes } from "../types/appTypes";
import useRegister from '../hooks/useRegister';
import { toast } from 'react-toastify';
export default function RegistrationPage(){
    const {register,loading } = useRegister();
    const [data, setData] = useState<registrationTypes>({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        department: '',
        specialization: '',
        password: '',
        confirmPassword: ''
    });
    const [, setPasswordError] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
          setPasswordError('Passwords do not match');
          toast.error('Passwords do not match');
          return;
        }
        setPasswordError(null);
        const result = await register(data);
        if (result) {
          toast.success('Registration successful');
        } else {
          toast.error('Registration failed');
        }
      };
    
return(
 <div className=" lg:max-w-7xl mx-auto pt-20 px-6">
     <div className="flex bg-black rounded-lg shadow-lg  overflow-hidden  mx-3 max-w-sm lg:max-w-7xl">
    <div
  className="hidden lg:block lg:w-1/2 bg-cover"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`,
  }}
>
</div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-center">Afyahub</h2>
            <p className="text-xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-center pt-3">Create Account</p>
            <div className="flex items-center justify-center ">
   
    <div className=" w-full">
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                        <input
                         type="text"
                         name ="first_name"
                         value={data.first_name}
                         onChange={handleChange} 
                         placeholder="John" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>

                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                         <input type="text"
                            name="last_name"
                         value={data.last_name}
                         onChange={handleChange}
                         placeholder="Doe" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>

                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                         <input type="text"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange} 
                         placeholder="XXX-XX-XXXX-XXX" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                         <input type="email" 
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                         placeholder="johnsnow@gmail.com" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Specialization</label>
                         <input type="text" 
                            name="specialization"
                            value={data.specialization}
                            onChange={handleChange}
                         placeholder="Doctor" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Department</label>
                         <input type="text" 
                        name="department"
                         value={data.department}
                        onChange={handleChange}
                         placeholder="Cardiology" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                         <input type="password" 
                            name="password"
                         value={data.password}
                         onChange={handleChange}
                         placeholder="Enter your password" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>
                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                         <input type="password"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleChange}
                         placeholder="Enter your password" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                <div className="mt-8">
                <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-red-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-orange-600">
                    {loading ? 'Registering...' : 'Sign Up'}
                    </button>
            </div>
                 </form>
                 {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}
    </div>
</div>
           
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">or login up</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
 </div>
   

      )
}