import * as React from "react";

type CorrelationMatrixData = Record<string, Record<string, number>>;

function correlationColor(value: number): string {
  // -1 (red) -> 0 (dark neutral) -> 1 (blue)
  if (value >= 0) {
    const intensity = Math.round(value * 180);
    return `rgb(${91 - intensity * 0.3}, ${127 - intensity * 0.1}, ${181})`;
  } else {
    const intensity = Math.round(Math.abs(value) * 180);
    return `rgb(${180}, ${91 - intensity * 0.3}, ${91 - intensity * 0.3})`;
  }
}

export function CorrelationHeatmap({
  matrix,
  tickers,
}: {
  matrix: CorrelationMatrixData;
  tickers: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase tracking-wide text-sm text-neutral-400">
        Correlation Matrix
      </p>
      <div className="overflow-x-auto">
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: `minmax(60px, 100px) repeat(${tickers.length}, 1fr)`,
          }}
        >
          <div />
          {tickers.map((t) => (
            <div key={t} className="text-xs text-neutral-400 text-center py-2">
              {t}
            </div>
          ))}
          {tickers.map((rowTicker) => (
            <React.Fragment key={rowTicker}>
              <div className="text-xs text-neutral-400 flex items-center py-2">
                {rowTicker}
              </div>
              {tickers.map((colTicker) => {
                const value = matrix[rowTicker][colTicker];
                return (
                  <div
                    key={colTicker}
                    className="flex items-center justify-center text-xs text-white rounded-lg transition-colors hover:brightness-110 cursor-default"
                    style={{
                      backgroundColor: correlationColor(value),
                      height: 120,
                    }}
                    title={`${rowTicker} vs ${colTicker}: ${value.toFixed(2)}`}
                  >
                    {value.toFixed(2)}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
