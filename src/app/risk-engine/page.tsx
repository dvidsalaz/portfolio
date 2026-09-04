import { CodeBlock } from "@/components/ui/CodeBlock";
import { Math } from "@/components/math";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ScrollObserver from "@/components/ui/scrollObserver";
import MyNavigation from "@/components/custom/customNavigation";
import { FunctionCarousel } from "@/components/custom/FunctionCarousel";
import { PortfolioSummary } from "@/components/custom/PortfolioSummary";
import portfolioData from "@/data/portfolio_summary.json";
import { VarCvarChart } from "@/components/custom/VarCvarChart";
import spyData from "@/data/spy_var_chart.json";
import tslaData from "@/data/tsla_var_chart.json";

import { CorrelationHeatmap } from "@/components/custom/CorrelationHeatMap";

import { Card, CardContent } from "@/components/ui/card";
import { MyFooter } from "@/components/custom/customFooter";

export default function RiskEngine() {
  return (
    <main className=" min-h-screen ">
      {/* Main Content */}
      <ScrollObserver>
        <section
          id="home"
          className="  flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-32 bg-wayneBlack min-h-screen "
        >
          <MyNavigation></MyNavigation>
          <Separator className=" bg-modernGray "></Separator>
          <div className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 min-h-screen ">
            <h1 className=" motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md text-3xl text-white">
              Portfolio Risk Engine
            </h1>
            <p className="text-neutral-300">
              A Python-based risk analysis engine that computes portfolio risk
              metrics including volatility, Value at Risk (VaR), Sharpe ratio,
              Conditional VaR (ES), correlation matrix, beta, and portfolio
              volatility using LSEG Enterprise Data.
            </p>
          </div>
        </section>
        <section
          id="projects"
          className=" flex flex-col p-6 min-h-screen sm:p-10 lg:p-20 bg-quartzWhite lg:px-60
              gap-10"
        >
          <div className=" flex flex-col gap-4">
            <h2 className="text-wayneBlack text-3xl intersect:motion-preset-fade-lg">
              methodology
            </h2>
            <p className=" text-black intersect:motion-preset-fade-lg">
              This engine uses historical VaR rather than parametric VaR.
              Historical simulation captures the actual skewness and excess
              kurtosis in return distributions, which a normal distribution
              assumption (parametric VaR) would fail to represent.
            </p>
          </div>
          <div className=" flex flex-col gap-4 text-wayneBlack text-2xl intersect:motion-preset-fade-lg">
            functions
            <FunctionCarousel />
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className=" text-wayneBlack text-2xl intersect:motion-preset-fade-lg">
              data pipeline
            </h2>
            <p className=" text-black intersect:motion-preset-fade-lg">
              Python module that pulls daily total returns from LSEG,
              dividend-adjusts, converts to decimal form, with local caching for
              reproducibility.
            </p>
          </div>
          <div>
            <div className="p-1 h-full intersect:motion-preset-fade-lg">
              <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
                <CardContent className="flex flex-col gap-5 p-4">
                  <div className="relative w-full h-80 overflow-y-auto shrink-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <CodeBlock
                      lang="python"
                      title="risk_metrics.py"
                      code={`import pandas as pd
import lseg.data as ld

def get_market_data(tickers, start_date, end_date, use_cache=False, cache_path='data/sample_returns.csv'):
    if use_cache:
        return pd.read_csv(cache_path, index_col=0, parse_dates=True)

    df = ld.get_data(
        universe=tickers,
        fields=['TR.TotalReturn.date', 'TR.TotalReturn'],
        parameters={
            'SDate': start_date,
            'EDate': end_date,
            "Frq": "D"
        }
    )
    df['Decimal Return'] = df['Total Return'] / 100
    wide_df = df.pivot(index='Date', columns='Instrument', values='Decimal Return')
    return wide_df
`}
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <p className="uppercase tracking-wide text-neutral-400">
                      GET_MARKET_DATA
                    </p>
                    <p className="text-neutral-300">
                      Pulls daily total return data from LSEG, already
                      dividend-adjusted, and converts to decimal form. Supports
                      local caching for reproducible runs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="  flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-60 bg-wayneBlack min-h-screen ">
          <h2 className="  text-white text-3xl intersect:motion-preset-fade-lg">
            results
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 intersect:motion-preset-fade-lg">
            <div className="flex flex-col gap-6 w-full lg:w-2/3">
              <VarCvarChart data={spyData} title="SPY — 95% VaR & CVaR" />
              <VarCvarChart data={tslaData} title="TSLA — 95% VaR & CVaR" />
            </div>
            <div
              id="card"
              className="p-3 sm:p-4 lg:p-8 flex flex-col bg-black text-white intersect:motion-preset-fade-lg w-full lg:w-1/3"
            >
              <div id="text-space" className="flex flex-col gap-1 text-sm">
                <p className="uppercase tracking-wide text-neutral-400">
                  FINDINGS SPY VS. TSLA
                </p>
                <p className="text-orange-300 text-xs italic">
                  Both charts share the same x-axis scale to allow direct
                  comparison of tail width.
                </p>
                <p className="text-neutral-300">
                  At a 95% confidence level, SPY&apos;s daily losses are not expected
                  to exceed 1.93%. On days where losses breach that threshold,
                  the average loss (CVaR) is 3.20%.
                </p>
                <p className=" text-neutral-300">
                  TSLA&apos;s 95% VaR is 6.28%, with an average tail loss (CVaR) of
                  9.09% — more than 3x wider than SPY&apos;s band in absolute terms.
                </p>
                <p className=" text-neutral-300">
                  Plotted on the same scale, the difference is visible directly:
                  SPY&apos;s distribution clusters tightly near zero with a narrow
                  VaR-CVaR band, while TSLA&apos;s is both wider overall and has a
                  substantially fatter left tail.
                </p>
                <p className=" text-neutral-300">
                  This illustrates a diversification effect concretely — SPY, as
                  a diversified index, absorbs idiosyncratic shocks that a
                  single volatile equity like TSLA does not.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 lg:px-60 bg-black min-h-screen">
          <h2 className="  text-white text-3xl intersect:motion-preset-fade-lg">
            portfolio-level risk
          </h2>
          <PortfolioSummary data={portfolioData} />
          <div className=" flex flex-col lg:flex-row gap-8 intersect:motion-preset-fade-lg">
            <div className="flex flex-col gap-4 w-full lg:w-2/3">
              <CorrelationHeatmap
                matrix={portfolioData.correlation_matrix}
                tickers={portfolioData.tickers}
              />
              <p className="text-xs text-neutral-500">
                Blue indicates positive correlation, red indicates negative
                correlation.
              </p>
            </div>
            <div
              id="card"
              className="p-3 sm:p-4 lg:p-8 flex flex-col bg-wayneBlack text-white intersect:motion-preset-fade-lg w-full lg:w-1/3"
            >
              <div id="text-space" className="flex flex-col gap-1 text-sm">
                <p className="uppercase tracking-wide text-neutral-400">
                  FINDINGS — CORRELATION
                </p>

                <p className=" text-neutral-300">
                  The portfolio&apos;s diversification benefit is visible in the
                  correlation structure: TLT (bonds) is negatively correlated
                  with SPY (-0.15), providing a partial hedge. TSLA&apos;s 0.50
                  correlation with SPY is notably higher than the other pairs,
                  meaning its risk isn&apos;t as diversified away by the rest of the
                  portfolio as its individual volatility might suggest — a large
                  TSLA allocation and a large SPY allocation are more redundant
                  than they appear.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6 border-l-4 border-orange-400 bg-wayneBlack">
            <p className="uppercase tracking-wide text-sm text-orange-400">
              Limitation
            </p>
            <p className="text-neutral-300">
              This implementation uses static (unconditional) correlation,
              computed over the full sample period. During market stress,
              correlations tend to spike toward 1 — assets that normally move
              independently start moving together. Because static correlation
              averages across calm and turbulent periods alike, it understates
              tail risk during crises. A more accurate approach would use
              Dynamic Conditional Correlation (DCC) or rolling-window
              correlation to capture how relationships shift under stress.
            </p>
          </div>
          <div>
            <p className=" text-neutral-300">Tech Stack</p>
            <Separator className=" bg-modernGray"></Separator>
            <div className=" text-neutral-300">
              Python &#124; pandas &#124; numpy &#124; LSEG Data &amp; Analytics
            </div>
          </div>
        </section>
        <Separator className=" bg-modernGray"></Separator>
        <MyFooter></MyFooter>
      </ScrollObserver>
    </main>
  );
}
