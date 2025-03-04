// import AssetsCard from './AssetCard';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { PatientGraph } from '../components/dashboard/PatientGraph';

export default function Overview() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold my-auto">Overview</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AssetsCard />
        <AssetsCard />
        <AssetsCard />
      </div> */}
       <StatsGrid />
          <div className="w-full">
            <PatientGraph />
          </div>
    </div>
  );
}