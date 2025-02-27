import { Bell,Search,Video } from 'lucide-react';
import logo from '../assets/Logo.png'

export default function UserHeader(){
  
    return(   
     <div className="flex items-center justify-between mb-8 p-4 sticky top-0 z-50 py-4 backdrop-blur-lg">
      <div>
        
          <h1 className="text-3xl font-bold"></h1>
      
      </div>
      <div className="flex items-center gap-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={30} />
        {/* <div className="relative">
         
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div> */}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg relative ">
          <Bell size={20} />
          <span
          className='absolute top-0 right-0  w-5 h-5 bg-red-500 rounded-full'
          >4</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200">
          <Video size={20} />
        </button>
        <img
            src={logo}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2"
        />
      </div>
    </div>
    )
}