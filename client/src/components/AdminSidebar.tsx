import { 
    LayoutGrid, 
    Users, 
    ClipboardList, 
    Clock, 
    CalendarDays, 
    DollarSign, 
    UserPlus, 
    Video
  } from 'lucide-react';

export default function AdminNavbar(){
    const menuItems = [
        { icon: <LayoutGrid size={20} />, label: 'Dashboard', active: true },
        { icon: <Users size={20} />, label: 'Employees' },
        { icon: <ClipboardList size={20} />, label: 'Checklist' },
        { icon: <Clock size={20} />, label: 'Time Off' },
        { icon: <CalendarDays size={20} />, label: 'Attendance' },
        { icon: <DollarSign size={20} />, label: 'Payroll' },
        { icon: <UserPlus size={20} />, label: 'Recruitment' },
      ];
    
      return (
        <div className="w-64 h-screen bg-gray-800 border-r border-gray-200 p-4 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-black"></span>
              Afyahub
            </h1>
          </div>
    
          {/* Navigation Menu */}
          <nav className="flex-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg mb-1 cursor-pointer ${
                  item.active ? 'bg-emerald-500 text-white' : 'hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
    
          {/* Meeting Card */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                <div className="w-6 h-6 rounded-full bg-gray-500"></div>
              </div>
              <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Video size={14} className="text-white" />
              </div>
            </div>
            <h3 className="font-medium mb-1">Daily Meeting</h3>
            <p className="text-sm text-gray-500 mb-3">9:30 - 10:30 AM on Zoom</p>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-lg w-full">
              Join now
            </button>
          </div>
        </div>
      );
}



