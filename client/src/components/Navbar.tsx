import{Menu,X} from "lucide-react"
import { useState } from "react"
import logo from '../assets/Logo1.jpg'
import { navItems } from '../data/webContent'
// import { Link } from "react-router-dom";
export default function Navbar(){
    
    const[mobileHamOpen,SetmobileHamOpen] = useState(false);
    const toggleNavbar = () =>{
     SetmobileHamOpen(!mobileHamOpen)
    };
return (
<>
<nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-neutral-700/80 ">
<div className="container px-4 mx-auto relative text-sm">
    <div className="flex justify-between items-centre">
        <div className="flex items-centre flex-shrink-0">
            <img className='h-10 w-25 mr-2 rounded-lg ' src={logo} alt="" />
        </div>
        <ul className="hidden lg:flex items-center ml-14 space-x-12">
            {
                navItems.map((item,index)=> (
                    <li key={index}>
                    <a href={item.href}>{item.label}</a>
                    {/* <Link to={item.href}>{item.label}</Link> */}
                    </li>
                ))
            }
        </ul>
        <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className='py-2 px-3 rounded-md border border-white hover:bg-gradient-to-r from-yellow-800 to-orange-800'>Sign In</a>
            <a href="" className='bg-gradient-to-r from-yellow-800 to-black  py-2 px-3 rounded-md'>
                Create Account
            </a>
        </div>
        {/* Mobile menu */}
        <div className="lg:hidden md:flex flex-col justify-end border border-white rounded-md ">
            <button onClick={toggleNavbar}>
                {mobileHamOpen ? <X/> :<Menu/>}
            </button>
        </div>
    </div>
    {mobileHamOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg-hidden">
            <ul>
                {
                    navItems.map((item,index) =>(
                        <li key={index} className="py-4 ">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex space-x-6">
            <a href="" className='py-2 px-3 rounded-md border border-white hover:bg-gradient-to-r from-yellow-800 to-orange-800'>Sign In</a>
            <a href="" className='bg-gradient-to-r from-yellow-800 to-orange-800 py-2 px-3 rounded-md'>
                Create Account
            </a>
            </div>
        </div>
    )}
</div>
</nav>
</>
)
}