import { Search, Bell, Video } from 'lucide-react';
export default function UserHeader(){
    return(   
     <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Hi, User</h1>
        <p className="text-gray-500">In this report, you will find your HR status</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200">
          <Bell size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200">
          <Video size={20} />
        </button>
      </div>
    </div>
    )
}