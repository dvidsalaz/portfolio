import * as React from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Math } from "../math";

export function FunctionCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def hist_var(asset_returns, confidence_level=0.95):
    assert 0 <= confidence_level <= 1, "confidence level is not between 0 and 1"
    var = asset_returns.quantile(1 - confidence_level)
    return var`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Historical VaR &mdash; Value at Risk
                  </p>
                  <p className="text-neutral-300">
                    Estimates the maximum expected loss at a given confidence
                    level
                  </p>
                  <Math latex="\footnotesize \text{VaR}_\alpha = -Q_{1-\alpha}(R)" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def cvar(asset_returns, confidence_level=0.95):
    assert 0 <= confidence_level <= 1, "confidence level is not between 0 and 1"
    var_threshold = hist_var(asset_returns, confidence_level)
    bad_returns = asset_returns[asset_returns < var_threshold]
    return bad_returns.mean()`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Estimated Shortfall (ES)
                  </p>
                  <p className="text-neutral-300">
                    Average of all returns that are worse than your VaR
                    threshold
                  </p>
                  <Math latex="\footnotesize \text{CVaR}_\alpha = \mathbb{E}[R \mid R \leq -\text{VaR}_\alpha]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def sharpe_ratio(asset_returns, risk_free_rate=0.04):
    sr = (expected_return(asset_returns) - risk_free_rate) / volatility(asset_returns)
    return sr`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Sharpe Ratio
                  </p>
                  <p className="text-neutral-300">
                    Measures risk-adjusted returns
                  </p>
                  <Math latex="\footnotesize \frac{\mathbb{E}[R_p - R_f]}{\sigma(R_p - R_f)}" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def beta(asset_returns, market_returns):
    covariance = asset_returns.cov(market_returns)
    m_var = market_returns.var()
    return covariance / m_var
`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Beta
                  </p>
                  <p className="text-neutral-300">
                    Measures the sensitivity of an asset relative to market
                    movement
                  </p>
                  <Math latex="\footnotesize \beta = \frac{\text{Cov}(R_a, R_m)}{\text{Var}(R_m)}" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def portfolio_volatility(asset_returns, weights):
    assert len(weights) == asset_returns.shape[1], "length of weights does not equal # of columns"
    assert np.isclose(weights.sum(), 1), " weights don't sum to 1.0."
    cov_matrix = asset_returns.cov() * 252
    return np.sqrt(weights.T @ cov_matrix @ weights)
`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Portfolio Volatility (covariance-based)
                  </p>
                  <p className="text-neutral-300">
                    Calculates how much the overall portfolio fluctuates
                  </p>
                  <Math latex="\footnotesize \sigma_p = \sqrt{w^T \Sigma w}" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2">
          <div className="p-1 h-full">
            <Card className=" h-full flex flex-col border-none bg-wayneBlack text-white">
              <CardContent className="flex flex-col gap-5 p-4">
                <div className="relative w-full h-80 overflow-hidden shrink-0">
                  <CodeBlock
                    lang="python"
                    title="risk_metrics.py"
                    code={`def stress_test(asset_returns, start_date, end_date, confidence_level=0.95):
    crisis_period = asset_returns.loc[start_date:end_date]  # splice data
    return hist_var(crisis_period, confidence_level), cvar(crisis_period, confidence_level)
`}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="uppercase tracking-wide text-neutral-400">
                    Historical stress testing
                  </p>
                  <p className="text-neutral-300">
                    Replays a portfolio&apos;s actual returns during a
                    historical crisis window to measure how VaR and CVaR behave
                    under real stress conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
