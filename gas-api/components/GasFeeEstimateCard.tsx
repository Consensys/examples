type Props = {
    estimate: GasFeeEstimate | undefined;
    title: string;
  };
  
  export const GasFeeEstimateCard: React.FC<Props> = ({ estimate, title }) => {
    if (!estimate) return null;
    return (
      <div className="border px-4 py-2 rounded-xl space-y-2 bg-white">
        <h2 className="font-semibold">{title}</h2>
        <p>Max Priority Fee: {estimate.suggestedMaxPriorityFeePerGas}</p>
        <p>Max Fee Per Gas: {estimate.suggestedMaxFeePerGas}</p>
        <p>Min Wait Time: {estimate.minWaitTimeEstimate} seconds</p>
        <p>Max Wait Time: {estimate.maxWaitTimeEstimate} seconds</p>
      </div>
    );
  };