type PortfolioSummaryData = {
  tickers: string[];
  weights: Record<string, number>;
  portfolio_var: number;
  portfolio_cvar: number;
  portfolio_volatility: number;
  portfolio_expected_return: number;
  confidence_level: number;
};

export function PortfolioSummary({ data }: { data: PortfolioSummaryData }) {
  const stats = [
    {
      label: "Expected Return (Annual)",
      value: `${(data.portfolio_expected_return * 100).toFixed(1)}%`,
    },
    {
      label: "Volatility (Annual)",
      value: `${(data.portfolio_volatility * 100).toFixed(1)}%`,
    },
    {
      label: `VaR (${data.confidence_level * 100}%)`,
      value: `${(data.portfolio_var * 100).toFixed(2)}%`,
    },
    {
      label: "CVaR (Expected Shortfall)",
      value: `${(data.portfolio_cvar * 100).toFixed(2)}%`,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col gap-1 p-4 bg-wayneBlack rounded-lg"
        >
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            {s.label}
          </p>
          <p className="text-2xl font-medium text-white">{s.value}</p>
        </div>
      ))}
      <div className="col-span-2 lg:col-span-4 text-sm text-neutral-400">
        Equal-weighted (25% each): {data.tickers.join(", ")}
      </div>
    </div>
  );
}
