import React from "react";
import Container from "../../common/Container";
import Card from "../../common/Card";

interface MarketCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MarketCategories: React.FC = () => {
  const categories: MarketCategory[] = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Forex",
      description:
        "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Stocks",
      description:
        "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      ),
      title: "Indices",
      description:
        "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Commodities",
      description:
        "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Access 17,000+ markets all in one
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trade forex, shares, indices, and commodities with competitive
            spreads, deep liquidity, and seamless execution.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["$0 Deposit Fees", "Spreads from 0.0 pips", "Secure Funds"].map(
            (feature, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 shadow-sm"
              >
                {feature}
              </div>
            )
          )}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer group hover:scale-105 transition-transform"
            >
              <div className="flex flex-col h-full">
                <div className="text-primary mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-neutral-600 text-sm flex-grow mb-4">
                  {category.description}
                </p>
                <div className="flex justify-end">
                  <svg
                    className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MarketCategories;
