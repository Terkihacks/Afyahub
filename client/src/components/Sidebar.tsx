// import { LogOut} from 'lucide-react'
// import { useState } from 'react'
import logo from '../assets/Logo.png'
import { sidebar } from '../data/webContent'

export default function Sidebar(){
    return(
        <>
    <div className="sidebar fixed w-64 h-screen overflow-y-auto  flex flex-col shadow-md dark:bg-gray-900 dark:border-gray-700 border-gray-200 ">
        {/* Logo Section */}
        <div className="flex items-centre flex-shrink-0 px-3">
            <h1 className='text-4xl text-centre font-bold py-2 px-2 text-[#00AB55]'>Afyahub</h1>
        </div>
        
        <div className='flex items-center dark:bg-gray-800 p-3 rounded-lg gap-4 h-[8%] mt-10 mx-4 sm:flex-nowrap max-w-sm '>
    {/* Profile Image Container */}
    <div className="relative">
        <img
            src={logo}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2"
        />
        {/* Online Status Indicator */}
        <span 
        className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full transform translate-x-2 translate-y-2">

        </span>
    </div>
    {/* User Info */}
    <div className="text-center sm:text-left py-2">
        <h6 className="font-semibold  text-sm">Raymond Munguti</h6>
        <p className="text-gray-500  text-sm ">Employee</p>
        {/* <LogOut className="w-5 h-5" strokeWidth="1.5" /> */}
    </div>
</div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="flex-1 mx-3 space-y-2">
            <div className="relative mx-3">    
            </div>
                <div className="linkRender">
                   {sidebar.map((link,index) =>(
                    <ul key={index}>
                        <a 
                        className="flex items-center px-3 py-3 my-6 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        href="">
                            <link.icon/>
                            <span className='mx-2 text-sm font-medium'>
                             {link.label}
                            </span>
                        </a>
                    </ul>
                   ))}
                </div>
            </nav>
            
            {/* Meeting Feature */}
          <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800 mx-3 mb-3">
          <p className="text-sm font-semibold">Daily Meeting</p>
          <p className="text-xs text-gray-500">9:30 - 10:30 AM on Zoom</p>
          <button className="mt-2 p-2 rounded-lg bg-green-600 text-white font-semibold">Join now</button>
           </div>

        {/* New Feature */}
            <div className=" mt-6 mb-12 mx-3">
                <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <h2 className='text-sm font-medium text-gray-800 dark:text-white'>New Available Feature</h2>
                    <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>Get to Know your collaborators Feature</p>
                    <img className='object-cover w-full h-32 mt-2 rounded-lg' src={logo} alt="" />
                </div>
            
            </div>
        </div>
       </div>
        </>
    )
}