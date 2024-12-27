import {  FileText, Plus, Search, Users2 } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import AdminNavbar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import AdminStatCard from '../components/AdminStatCard';

export default function AdminDashboard() {
  // Sample data for the performance chart
  const performanceData = [
    { name: 'Mon', Project: 20000, Product: 15000 },
    { name: 'Tue', Project: 30000, Product: 20000 },
    { name: 'Wed', Project: 45000, Product: 25000 },
    { name: 'Thu', Project: 25000, Product: 30000 },
    { name: 'Fri', Project: 20000, Product: 15000 },
    { name: 'Sat', Project: 35000, Product: 20000 },
    { name: 'Sun', Project: 40000, Product: 25000 },
  ];

  // Sample data for employees
  const employees = [
    {
      name: 'Terry Lipshultz',
      email: 'te@orixcreative.com',
      role: 'UI UX Designer',
      status: 'Active',
      manager: 'Jakob',
      team: 'Design Team',
      office: 'Orix Dubai'
    },
    {
      name: 'Jaylon Aminoff',
      email: 'ja@orixcreative.com',
      role: 'Graphic Designer',
      status: 'Probation',
      manager: 'Wilson',
      team: 'Project Team',
      office: 'Orix USA'
    },
    // Add more employee data as needed
  ];

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        {/* Header */}
        <AdminHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <AdminStatCard
            icon={<Users2 className="text-yellow-600" size={24} />}
            value={4342}
            label="Total Employees"
            percentage={44.22}
            isPositive={true}
          />
          <AdminStatCard
            icon={<FileText className="text-blue-600" size={24} />}
            value={2638}
            label="Job Applicants"
            percentage={21.7}
            isPositive={false}
          />
          <AdminStatCard
            icon={<Plus className="text-emerald-600" size={24} />}
            value={3682}
            label="New Employees"
            percentage={33.6}
            isPositive={true}
          />
        </div>

        {/* Team Performance Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Team Performance</h2>
              <p className="text-gray-500">Last 7 Days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm">Project Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-200 rounded-full"></div>
                <span className="text-sm">Product Team</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <Bar dataKey="Project" fill="#10B981" />
                <Bar dataKey="Product" fill="#A7F3D0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employees Table */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Employees</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
                  Add filter
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-8 p-4">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Employee Name</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Role</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Manager</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Team</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Office</th>
                  <th className="w-8 p-4"></th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <span>{employee.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{employee.email}</td>
                    <td className="p-4">{employee.role}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        employee.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        employee.status === 'Probation' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        {employee.manager}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {employee.team}
                      </span>
                    </td>
                    <td className="p-4">{employee.office}</td>
                    <td className="p-4">
                      <button className="text-gray-400 hover:text-gray-600">•••</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
