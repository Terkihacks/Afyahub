// import AssetsCard from '../dashboardpages/AssetCard';
import { Routes,Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import UserHeader from '../components/UserHeader';
import { useState } from 'react';
import Overview from '../dashboardpages/Overview';
import Settings from '../features/Settings';
import TeamDisplay from '../features/TeamDisplay';
import TaskFeature from '../features/TaskFeature';

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
    <div className="flex-1 min-h-screen ml-0 lg:ml-64">  
      {/* Navbar */}
      <UserHeader onMenuClick={() => setIsMobileMenuOpen(true)}/>
      {/* Page Content */}
      <main className='p-4 '>
        <Routes>
        <Route path="/" element={<Overview />} />
            <Route path="team" element={<TeamDisplay />} />
            <Route path="taskfeature" element={<TaskFeature />} />
            {/* <Route path="notification" element={<Messages />} /> */}
            <Route path="settings" element={<Settings />} />
        </Routes>
      </main> 
      </div>
    </div>
);
}