import React from 'react';

interface AdminStatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  percentage: number;
  isPositive?: boolean;
}

const AdminStatCard: React.FC<AdminStatCardProps> = ({ 
  icon, 
  value, 
  label, 
  percentage, 
  isPositive = true 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center
          ${isPositive ? 'bg-yellow-100' : 'bg-blue-100'}`}>
          {icon}
        </div>
        <span className={`text-sm ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}>
          {percentage}%
        </span>
      </div>
      <h3 className="text-2xl font-semibold mb-1">{value.toLocaleString()}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default AdminStatCard;