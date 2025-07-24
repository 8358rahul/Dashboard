// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import SalesOverview from "../components/SalesOverview";
// import SalesReport from "../components/SalesReport";
// import ActivityFeed from "../components/ActivityFeed";
// import FilterBar from "../components/FilterBar";
// import AddAgentDialog from "../components/AddAgentDialog";
// import StoreTraffic from "../components/StoreTraffic";

// export default function Dashboard() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="flex-1 p-6 lg:p-10 space-y-8">
//         <Header />
//         <FilterBar />

//         {/* Horizontally split content area */}
//         <div className="flex gap-6">
//           {/* Left column */}
//           <div className="flex flex-col gap-6 w-2/2">
//             <SalesOverview />
//             <SalesReport />
//             <StoreTraffic />
//             <AddAgentDialog />
//           </div>

//           {/* Right column */}
//           <div className="w-1/3">
//             <ActivityFeed />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import Header from "../components/Header";
import SalesOverview from "../components/SalesOverview";
import SalesReport from "../components/SalesReport";
import ActivityFeed from "../components/ActivityFeed";
import FilterBar from "../components/FilterBar";
import AddAgentDialog from "../components/AddAgentDialog";
import StoreTraffic from "../components/StoreTraffic";
import SidebarWrapper from "../components/SidebarWrapper";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar – fixed and responsive */}
      <SidebarWrapper />

      {/* Main content area */}
      <main className="flex-1 lg:ml-64 p-6 lg:p-10 space-y-8 w-full">
        <Header />
        <FilterBar />

        {/* Content split – responsive */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            <SalesOverview />
            <SalesReport />
            <StoreTraffic />
            <AddAgentDialog />
          </div>

          {/* Right column – Activity Feed */}
          <div className="w-full lg:w-1/3">
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
