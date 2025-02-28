import AssetsCard from './AssetCard';

export default function Overview() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AssetsCard />
        <AssetsCard />
        <AssetsCard />
      </div>
    </div>
  );
}