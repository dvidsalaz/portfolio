"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type VarChartData = {
  var: number;
  cvar: number;
  confidence_level: number;
  bins: { return: number; frequency: number }[];
};

export function VarCvarChart({
  data,
  title,
}: {
  data: VarChartData;
  title: string;
}) {
  const gradientId = `barGradient-${title.replace(/\s+/g, "")}`;

  return (
    <div className="flex flex-col gap-3">
      <p className="uppercase tracking-wide text-sm text-neutral-400">
        {title}
      </p>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={data.bins}
          margin={{ top: 30, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5b7fb5" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#5b7fb5" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="return"
            type="number"
            domain={[-0.22, 0.22]}
            tickCount={6}
            tickFormatter={(v) => `${(v * 100).toFixed(1)}%`}
            stroke="#a3a3a3"
            fontSize={12}
          />
          <YAxis stroke="#a3a3a3" fontSize={12} />
          <Tooltip
            formatter={(value) => [value, "Frequency"]}
            labelFormatter={(label: number) =>
              `Return: ${(label * 100).toFixed(2)}%`
            }
            contentStyle={{ backgroundColor: "#1a1a1a", border: "none" }}
          />
          <ReferenceArea
            x1={data.cvar}
            x2={data.var}
            fill="#f43f5e"
            fillOpacity={0.15}
            isFront={true}
            ifOverflow="visible"
          />
          <Bar
            dataKey="frequency"
            fill={`url(#${gradientId})`}
            radius={[2, 2, 0, 0]}
          />
          <ReferenceLine
            x={data.var}
            stroke="#f43f5e"
            strokeWidth={2}
            label={{
              value: `VaR: ${(data.var * 100).toFixed(2)}%`,
              position: "insideTopLeft",
              fill: "#f59e0b",
              fontSize: 12,
            }}
          />
          <ReferenceLine
            x={data.cvar}
            stroke="#14b8a6"
            strokeDasharray="4 4"
            strokeWidth={2}
            label={{
              value: `CVaR: ${(data.cvar * 100).toFixed(2)}%`,
              position: "top",
              fill: "#14b8a6",
              fontSize: 12,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
