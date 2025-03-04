import { Users, Calendar, Clock, CheckCircle } from 'lucide-react';
import { DashboardCard } from '../cards/DashboardCard';

export  function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <DashboardCard
        title="Total Patients"
        value="1,234"
        icon={<Users className="h-6 w-6 text-blue-600" />}
        trend={12}
        trendLabel="vs last month"
      />
      <DashboardCard
        title="Today's Appointments"
        value="48"
        icon={<Calendar className="h-6 w-6 text-green-600" />}
        trend={-5}
        trendLabel="vs yesterday"
      />
      <DashboardCard
        title="Average Wait Time"
        value="14min"
        icon={<Clock className="h-6 w-6 text-orange-600" />}
        trend={3}
        trendLabel="vs last week"
      />
      <DashboardCard
        title="Completed Tasks"
        value="89%"
        icon={<CheckCircle className="h-6 w-6 text-purple-600" />}
        trend={8}
        trendLabel="vs last week"
      />
    </div>
  );
}