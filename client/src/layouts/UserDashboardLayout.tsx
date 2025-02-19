import AssetsCard from '../dashboardpages/AssetCard';
import Sidebar from '../components/Sidebar';
// import StatsCard from '../dashboardpages/StatsCard';
import UserHeader from '../components/UserHeader';
export default function UserDashboardLayout(){
    return(
 <div className="flex h-screen ">
    {/* Sidebar */}
  <Sidebar/>
    {/* Main Content */}
    <div className="flex-1 min-h-screen ml-0 lg:ml-64">  
      {/* Navbar */}
      <UserHeader/>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3">   
        <AssetsCard/>
        </div> 
      </div>

    </div>
);
}