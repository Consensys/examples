type Props = {
  data: GasFeesApiResponse | undefined;
};

export const GasCard: React.FC<Props> = async ({ data }) => {
  if (!data) return null;
  return (
    <div className="border px-8 py-4 rounded-xl space-y-4 bg-white w-full">
      <div>
        <h2 className="font-semibold">Estimated Base Fee</h2>
        <p>Gas Price: {data?.estimatedBaseFee}</p>
      </div>
      <div>
        <h2 className="font-semibold">Network Congestion</h2>
        <p>{data?.networkCongestion}</p>
      </div>
      <div>
        <h2 className="font-semibold">Latest Priority Fee Range</h2>
        <p>{data?.latestPriorityFeeRange}</p>
      </div>
      <div>
        <h2 className="font-semibold">Historical Priority Fee Range</h2>
        <p>{data?.historicalPriorityFeeRange}</p>
      </div>
      <div>
        <h2 className="font-semibold">Historical Base Fee Range</h2>
        <p>{data?.historicalBaseFeeRange}</p>
      </div>
      <div>
        <h2 className="font-semibold">Priority Fee Trend</h2>
        <p>{data?.priorityFeeTrend}</p>
      </div>
      <div>
        <h2 className="font-semibold">Base Fee Trend</h2>
        <p>{data?.baseFeeTrend}</p>
      </div>
    </div>
  );
};
