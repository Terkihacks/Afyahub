import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import UserHeader from '../components/UserHeader';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import Overview from '../dashboardpages/Overview';
import TeamDisplay from '../features/TeamDisplay';
import TaskFeature from '../features/TaskFeature';

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
          <StatsGrid />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="team" element={<TeamDisplay />} />
            <Route path="taskfeature" element={<TaskFeature />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}