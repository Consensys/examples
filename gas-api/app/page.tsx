import { GasCard } from "@/components/GasCard";
import { GasFeeEstimateCard } from "@/components/GasFeeEstimateCard";
import { getData } from "@/lib/getData";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center p-24 max-w-screen-lg jusitfy-center mx-auto">
      <h1 className="text-3xl font-bold">Gas API</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <GasFeeEstimateCard estimate={data?.low} title="Low Gas Fee Estimate" />
        <GasFeeEstimateCard
          estimate={data?.medium}
          title="Medium Gas Fee Estimate"
        />
        <GasFeeEstimateCard
          estimate={data?.high}
          title="High Gas Fee Estimate"
        />
      </div>
      <GasCard data={data} />
    </main>
  );
}
