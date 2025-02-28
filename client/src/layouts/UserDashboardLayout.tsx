import AssetsCard from '../dashboardpages/AssetCard';
import Sidebar from '../components/Sidebar';
import UserHeader from '../components/UserHeader';
import { useState } from 'react';

export default function UserDashboardLayout(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const handleCloseSidebar = () => {
    setIsMobileMenuOpen(false);
  };

    return(
 <div className="flex h-screen dark: dark:bg-gray-900">
    {/* Sidebar */}
  <Sidebar 
  isOpen={isMobileMenuOpen} 
  onClose={handleCloseSidebar}/>
    {/* Page  Content */}
    <div className="flex-1 min-h-screen ml-0 lg:ml-64">  
      {/* Navbar */}
      <UserHeader onMenuClick={() => setIsMobileMenuOpen(true)}/>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div> 
      
      </div>

    </div>
);
}