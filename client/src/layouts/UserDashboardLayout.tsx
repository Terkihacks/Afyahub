import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import UserHeader from '../components/UserHeader';
import Overview from '../dashboardpages/Overview';
import TeamDisplay from '../features/TeamDisplay';
import TaskFeature from '../features/TaskFeature';
import Settings from '../features/Settings';


export default function UserDashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleCloseSidebar = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen dark:bg-gray-900">
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={handleCloseSidebar}
      />
      <div className="flex-1 min-h-screen ml-0 lg:ml-64">
        <UserHeader onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="team" element={<TeamDisplay />} />
            <Route path="taskfeature" element={<TaskFeature />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}