import { useState } from "react"
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const UserDashboardRoutes = () =>{
    //State management of the Dashboard
    const[activeTab,setActiveTab] = useState();
    // Use the switch case
    const renderContent  = () =>{
        switch(activeTab){
            case "Dashboard":
                return <Home />;
              case "Analytics":
                return <Analytics />;
              case "Reports":
                return <Reports />;
              case "Settings":
                return <Settings />;
              case "Profile":
                return <Profile />;
              default:
                return <Home />;
        }
    }

    return(
        <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <Navbar activeTab={activeTab} />
          <main className="flex-1 overflow-y-auto">{renderContent()}</main>
        </div>
      </div>
    )


}

export default UserDashboardRoutes;