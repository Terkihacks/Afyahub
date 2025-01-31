export default function RegistrationPage(){

    
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
    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                        <input
                         type="text" 
                         placeholder="John" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>

                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                         <input type="text" 
                         placeholder="Doe" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>

                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                         <input type="text" 
                         placeholder="XXX-XX-XXXX-XXX" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                         <input type="email" 
                         placeholder="johnsnow@gmail.com" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Specialization</label>
                         <input type="text" 
                         placeholder="Doctor" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Department</label>
                         <input type="text" 
                         placeholder="Cardiology" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                         <input type="password" 
                         placeholder="Enter your password" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                     </div>
                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                         <input type="password" 
                         placeholder="Enter your password" 
                         className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                 </form>
    </div>
</div>
           
            <div className="mt-8">
                
                <button className="bg-gradient-to-r from-orange-500 to-red-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-orange-600">SignUp</button>
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