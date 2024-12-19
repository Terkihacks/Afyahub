export default function userDashboard(){
    return(
        <>
          <div className="dashboard-container flex min-h-screen">
      {/* Sidebar */}
      <aside className="sidebar fixed w-64 bg-white h-screen flex flex-col shadow-md">
        {/* Logo Section */}
        <div className="logo p-4 text-2xl font-bold">talently</div>

        {/* Navigation Links */}
        <nav className="nav-links flex-grow mt-4">
          <ul className="space-y-2">
            <li className="p-3 bg-green-100 text-green-700 rounded-md">Dashboard</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Employees</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Checklist</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Time Off</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Attendance</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Payroll</li>
            <li className="p-3 hover:bg-gray-100 rounded-md">Recruitment</li>
          </ul>
        </nav>

        {/* Daily Meeting Widget */}
        <div className="daily-meeting p-4 border-t">
          <p className="text-sm font-semibold">Daily Meeting</p>
          <p className="text-xs text-gray-500">9:30 - 10:30 AM on Zoom</p>
          <button className="mt-2 text-green-600 font-semibold">Join now</button>
        </div>

        {/* Profile */}
        <div className="profile p-4 border-t">
          <p className="font-semibold">Jaydon Levin</p>
          <p className="text-xs text-gray-500">levin@gmail.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content flex-grow bg-gray-50">
        {/* Top Bar */}
        <div className="top-bar flex items-center justify-between p-4 bg-white shadow">
          <input
            type="text"
            placeholder="Search"
            className="search-bar border border-gray-300 rounded-md px-3 py-2 w-1/3"
          />
          <div className="icons flex space-x-4">
            <div className="icon">🔔</div>
            <div className="icon">⚙️</div>
          </div>
        </div>

        {/* Header */}
        <header className="header p-4 bg-white shadow mt-4">
          <h1 className="text-xl font-semibold">Hi, Alfredo</h1>
          <p className="text-sm text-gray-600">In this report, you will find your HR status.</p>
        </header>

        {/* Stats Cards */}
        <section className="stats-cards grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="card bg-white shadow-md p-4 rounded-md">
            <p className="text-sm">Total Employees</p>
            <h3 className="text-2xl font-bold">4,342</h3>
            <p className="text-green-500 text-sm">+44.2%</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-md">
            <p className="text-sm">Job Applicants</p>
            <h3 className="text-2xl font-bold">2,638</h3>
            <p className="text-red-500 text-sm">-21.7%</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-md">
            <p className="text-sm">New Employees</p>
            <h3 className="text-2xl font-bold">3,682</h3>
            <p className="text-green-500 text-sm">+33.6%</p>
          </div>
        </section>

        {/* Chart Section */}
        <section className="chart bg-white shadow-md p-4 m-4 rounded-md">
          <div className="chart-header flex justify-between items-center">
            <h3 className="text-lg font-semibold">Team Performance</h3>
            <select className="dropdown border border-gray-300 rounded-md px-3 py-2">
              <option>Last 7 months</option>
            </select>
          </div>
          <div className="chart-content mt-4">
            {/* Chart Placeholder */}
            <div className="h-40 bg-gray-100 rounded-md"></div>
          </div>
        </section>

        {/* Employee Table */}
        <section className="employees-table p-4 bg-white shadow-md m-4 rounded-md">
          <div className="table-header flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Employees</h3>
            <div className="controls flex space-x-2">
              <input
                className="search-bar border border-gray-300 rounded-md px-3 py-2"
                placeholder="Search..."
              />
              <button className="filter-button bg-green-500 text-white px-3 py-2 rounded-md">
                Add Filter
              </button>
            </div>
          </div>
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Employee Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
                <th className="p-2">Manager</th>
                <th className="p-2">Team</th>
                <th className="p-2">Office</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows Placeholder */}
              <tr className="hover:bg-gray-50">
                <td className="p-2">Terry Lipshutz</td>
                <td className="p-2">te@orixcreative.com</td>
                <td className="p-2">UI/UX Designer</td>
                <td className="p-2 text-green-500">Active</td>
                <td className="p-2">Jakob</td>
                <td className="p-2">Design Team</td>
                <td className="p-2">Orix Dubai</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
   </>
    )
}