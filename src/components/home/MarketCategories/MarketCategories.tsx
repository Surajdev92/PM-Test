import React from "react";
import Container from "../../common/Container";
import Card from "../../common/Card";
import coinIcon from "../../../assets/icons/Coin.png";
import graphAscendIcon from "../../../assets/icons/Graph Ascend.png";
import analyticsPieIcon from "../../../assets/icons/Analytics Pie.png";
import earthGradientIcon from "../../../assets/icons/Earth Gradient.png";
import validatedIcon from "../../../assets/icons/Validated.png";
import marketCategoriesBg from "../../../assets/images/Market Categories.png";
import sendIcon from "../../../assets/icons/Send.svg";

interface MarketCategory {
  icon: string;
  title: string;
  description: string;
}

const MarketCategories: React.FC = () => {
  const categories: MarketCategory[] = [
    {
      icon: coinIcon,
      title: "Forex",
      description:
        "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    },
    {
      icon: graphAscendIcon,
      title: "Stocks",
      description:
        "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
    },
    {
      icon: analyticsPieIcon,
      title: "Indices",
      description:
        "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
    },
    {
      icon: earthGradientIcon,
      title: "Commodities",
      description:
        "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={marketCategoriesBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0"></div>
      </div>

      <Container>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 max-w-6xl mx-auto">
              Access <span className="text-primary">17,000+</span> markets all
              in one
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Trade forex, shares, indices, and commodities with competitive
              spreads, deep liquidity, and seamless execution.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { text: "$0 Deposit Fees", icon: validatedIcon },
              { text: "Spreads from 0.0 pips", icon: coinIcon },
              { text: "Secure Funds", icon: validatedIcon },
            ].map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 flex items-center gap-2"
              >
                {feature.icon && (
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                )}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="cursor-pointer !rounded-3xl group hover:-translate-y-5 transition-transform bg-white"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3 pb-3 border-b border-neutral-200">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 text-sm flex-grow mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex">
                    <button
                      className="w-10 h-10 rounded-full bg-neutral-200 group-hover:bg-primary transition-colors duration-200 flex items-center justify-center"
                      aria-label={`Learn more about ${category.title}`}
                    >
                      <img
                        src={sendIcon}
                        alt=""
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketCategories;
