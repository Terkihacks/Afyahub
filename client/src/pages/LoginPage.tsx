import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { loginTypes } from "../types/appTypes";
import {useAuth} from "../hooks/useAuth";	
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
// import Spinner from "../components/Spinner";

export default function Login(){
  const navigate = useNavigate();
  const {login} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [values,setValues] = useState<loginTypes>({
    email:'',
    password:'',
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await login(values);
      console.log('Login response:', result); // Debugging response
    
      if (!result || !result.success) {
        toast.error('Invalid credentials');
        return;
      }
    
      toast.success('Login successful');
      const user = result.user;
    
      if (!user) {
        console.error('Login response missing user:', result);
        toast.error('Login failed: User data is missing');
        return;
      }
    
      console.log('User role:', user.role); // Debugging user role
    
      if (user.role === 'employee') {
        navigate('/userdashboard');
      } else {
        navigate('/admindashboard');
      }
    } catch (error) {
      console.error('Login error:', error); // Log error for debugging
      toast.error('Login failed');
    }
    finally{
      setIsLoading(false);
    }
  };

return(
   <>
    
   <div className="lg:max-w-7xl mx-auto pt-20 px-6">
     <section className=" flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 md:mx-0 md:my-0 max-w-7xl mx-auto pt-20 px-6">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Login Image" />
          </div>
          <div className="md:w-1/3 max-w-sm">
         <form onSubmit={handleSubmit}>
         <div className="text-center md:text-left">
              <label className="mr-1">Sign in</label>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
            </div>
            <input
             className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" 
             type="text"
             name="email" 
             placeholder="Email Address"
             onChange={e => setValues({...values,email: e.target.value})}
              />
            <input 
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
            type="password" 
            placeholder="Password"
            name="password"
            onChange={e => setValues({...values,password:e.target.value})} />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
            </div>
            <div className="text-center md:text-left">
              <button
               disabled ={isLoading}
               className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
               type="submit">
               {isLoading ? <Spinner text="Authenticating..." /> : 'Login'}
                </button>
            </div>
         </form>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account? <Link to='/register'
                className="text-red-600 hover:underline hover:underline-offset-4"
              >
            Register
              </Link>
            </div>
            
          </div>
        </section>
   </div>
   </>
        
      )
}