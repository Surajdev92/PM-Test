import React from "react";
import Container from "../../common/Container";
import Card from "../../common/Card";
import countriesIcon from "../../../assets/icons/Countries.png";
import analyticsUp from "../../../assets/images/Analytics Up.png";
import analyticsDown from "../../../assets/images/Analytics Down.png";

interface MarketDataItem {
  pair: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: string;
}

const MarketDataStrip: React.FC = () => {
  const marketData: MarketDataItem[] = [
    {
      pair: "USD/EUR",
      value: "0.00014",
      change: "-234.45",
      isPositive: false,
      icon: countriesIcon,
    },
    {
      pair: "XAUUSD",
      value: "2,045.23",
      change: "+12.34",
      isPositive: true,
      icon: countriesIcon,
    },
    {
      pair: "USD/EUR",
      value: "0.00014",
      change: "-234.45",
      isPositive: false,
      icon: countriesIcon,
    },
    {
      pair: "XAUUSD",
      value: "2,045.23",
      change: "+12.34",
      isPositive: true,
      icon: countriesIcon,
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {marketData.map((item, index) => (
            <Card key={index} className="p-4 md:p-6">
              <div className="flex gap-3 justify-between">
                {/* Icon and Pair Name */}
                <div className="flex items-center gap-3">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.pair}
                      className="w-7 h-6 object-contain"
                    />
                  )}
                  <span className="font-bold text-neutral-900 text-sm">
                    {item.pair}
                  </span>
                </div>

                {/* Analytics Trend Image */}
                <div className="flex items-center">
                  <img
                    src={item.isPositive ? analyticsUp : analyticsDown}
                    alt={item.isPositive ? "Upward trend" : "Downward trend"}
                    className="w-10 h-4 object-contain"
                  />
                </div>

                {/* Value and Change */}
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-neutral-900 text-xs">
                    {item.value}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      item.isPositive ? "text-accent-600" : "text-primary"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MarketDataStrip;
