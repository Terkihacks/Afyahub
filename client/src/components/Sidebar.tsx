import { LogOut, Search } from 'lucide-react'
import logo from '../assets/Logo.png'
import { sidebar } from '../data/webContent'
export default function Sidebar(){
    return(
        <>
     <aside className="sidebar fixed w-64 h-screen flex flex-col overflow-y-auto shadow-md  rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 rounded-lg">
        {/* Logo Section */}
        <div className="flex items-centre flex-shrink-0">
            <img className='h-10 w-25 mr-2 rounded-lg ' src={logo} alt="" />
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="flex-1 mx-3 space-y-2">
            <div className="relative mx-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" strokeWidth="1.5"/>
                </span>
                <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
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
            <div className=" mb-20 mx-3">
                <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <h2 className='text-sm font-medium text-gray-800 dark:text-white'>New Available Feature</h2>
                    <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>Get to Know your collaborators Feature</p>
                    <img className='object-cover w-full h-32 mt-2 rounded-lg' src={logo} alt="" />
                </div>
            </div>
            <div className="flex items-centre justify-between mt-6 mb-6 mx-3">
                    {/* Logo Image */}
                    <a href=""
                    className='flex items-center gap-x-2'>
                        <img className='object-cover rounded-full h-7 w-7' src={logo} alt="" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Sins</span>
                    </a>
                    {/*  Log out*/}
                    <a href=""
                    className='text-gray-500 transition-colors duration-200 rotate-360 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400'
                    >
                         <LogOut className="w-5 h-5" strokeWidth="1.5" />
                    </a>
                </div>
        </div>
       </aside>
        </>
    )
}