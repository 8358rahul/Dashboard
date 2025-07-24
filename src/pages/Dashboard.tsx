import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SalesOverview from "../components/SalesOverview";
import SalesReport from "../components/SalesReport";
import ActivityFeed from "../components/ActivityFeed";
import FilterBar from "../components/FilterBar";
import AddAgentDialog from "../components/AddAgentDialog";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10 space-y-8">
        <Header />
        <FilterBar />
        <SalesOverview />
        <SalesReport />
        <ActivityFeed />
        <AddAgentDialog />
      </main>
    </div>
  );
}
