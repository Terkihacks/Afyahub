import AssetsCard from '../components/AssetCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
export default function UserDashboardLayout(){
    return(
 <div className="flex h-screen py-4 ">
    {/* Sidebar */}
  <Sidebar/>
    {/* Main Content */}
    <div className="flex-1 min-h-screen ml-0 lg:ml-64">  
      {/* Navbar */}
      <Navbar/>
      <div className="flex flex-col space-y-4 overflow-auto">
        {/* Stats Cards */}
        <StatsCard/>
    </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div>

      </div>

    </div>
);
}