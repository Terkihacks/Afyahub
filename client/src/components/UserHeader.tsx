import { Bell, Search, Video, Menu } from 'lucide-react';
import logo from '../assets/Logo.png'
import { useAuth } from '../hooks/useAuth';

interface UserHeaderProps {
  onMenuClick: () => void;
}

export default function UserHeader({onMenuClick}: UserHeaderProps) {
  const { isAuthenticated, getUser } = useAuth();

  return (   
    <div className="flex items-center justify-between p-4 sticky top-0 z-50 backdrop-blur-lg">
      {/* Mobile Menu Button - visible only on mobile */}
      <button
        onClick={onMenuClick}
       className="lg:hidden p-2">
        <Menu size={24} />
      </button>

      {/* User Name - hidden on mobile */}
      <div className="hidden md:block">
        {isAuthenticated() && getUser() && (
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            {getUser().first_name}
          </h1>
        )}
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
        {/* Search - hidden on mobile */}
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            4
          </span>
        </button>

        {/* Video Call - hidden on mobile */}
        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200">
          <Video size={20} />
        </button>

        {/* Profile Picture */}
        <img
          src={logo}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2"
        />
      </div>
    </div>
  );
}