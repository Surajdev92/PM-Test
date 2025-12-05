import React, { useState, useMemo, useCallback } from "react";
import Container from "../../common/Container";
import buyArrow from "../../../assets/icons/Buy arrow.svg";
import sellArrow from "../../../assets/icons/Sell arrow.svg";
import graphImage from "../../../assets/images/Graph.png";
import cryptocurrencyIcon from "../../../assets/icons/Cryptocurrency.png";
import arrowSquareIn from "../../../assets/icons/ArrowSquareIn.svg";
import infoIcon from "../../../assets/icons/info.svg";

interface MarketItem {
  icon: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

interface Tab {
  id: string;
  label: string;
}

const OurMarkets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("most-traded");
  const [activeTimeFilter, setActiveTimeFilter] = useState<string>("1d");

  const tabs: Tab[] = useMemo(
    () => [
      { id: "most-traded", label: "Most Traded" },
      { id: "commodities", label: "Commodities" },
      { id: "indices", label: "Indices" },
      { id: "cryptocurrencies", label: "Cryptocurrencies" },
      { id: "shares", label: "Shares" },
      { id: "etfs", label: "ETFs" },
    ],
    []
  );

  const marketItems: MarketItem[] = useMemo(
    () => [
      {
        icon: cryptocurrencyIcon,
        symbol: "BTC",
        name: "Bitcoin",
        price: "₱43,245.67",
        change: "+2.34%",
        isPositive: true,
      },
      {
        icon: cryptocurrencyIcon,
        symbol: "ETH",
        name: "Ethereum",
        price: "₱ 2,456.78",
        change: "-1.23%",
        isPositive: false,
      },
      {
        icon: cryptocurrencyIcon,
        symbol: "XRP",
        name: "Ripple",
        price: "₱ 0.5234",
        change: "+0.45%",
        isPositive: true,
      },
      {
        icon: cryptocurrencyIcon,
        symbol: "LTC",
        name: "Litecoin",
        price: "₱ 78.90",
        change: "-0.12%",
        isPositive: false,
      },
      {
        icon: cryptocurrencyIcon,
        symbol: "ADA",
        name: "Cardano",
        price: "₱ 0.4567",
        change: "+1.56%",
        isPositive: true,
      },
    ],
    []
  );

  const timeFilters = useMemo(
    () => ["1d", "1h", "4h", "1m", "5m", "15m", "30m", "1w"],
    []
  );

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  const handleTimeFilterChange = useCallback((filter: string) => {
    setActiveTimeFilter(filter);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24">
      <Container>
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 sm:mb-4">
            Our Markets
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Stay informed with the data that matters, on 17,000+ markets. Get
            the latest news, trader sentiment, spreads, price action and much
            more.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 md:mb-12 overflow-x-auto pb-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary border"
                  : "bg-white text-neutral-700 hover:bg-primary hover:text-white border-primary border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left Side - Market List */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            {marketItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl p-[1px] border border-neutral-200 hover:bg-hover-border-gradient transition-all duration-200 group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-3 xl:p-5 group-hover:bg-hover-bg-gradient transition-all duration-200 shadow-card">
                  <div className="flex items-center gap-2 xl:gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.symbol}
                        className="w-8 h-8 xl:w-full xl:h-full object-contain"
                      />
                    </div>

                    {/* Symbol & Name */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base xl:text-lg font-bold text-text-primary group-hover:text-white transition-colors">
                        {item.symbol}
                      </h3>
                      <span className="text-xs sm:text-sm text-neutral-500 group-hover:text-white/80 truncate transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {/* Percentage Change */}
                    <div className="flex items-center xl:gap-4 gap-2">
                      <p className="text-sm xl:text-base font-semibold text-text-primary group-hover:text-white transition-colors">
                        {item.price}
                      </p>
                      <span
                        className={`text-sm xl:text-base font-semibold group-hover:text-white transition-colors ${
                          item.isPositive ? "text-accent-600" : "text-primary"
                        }`}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Top Row: Gold Card & Stats */}
          <div className="lg:col-span-8">
            {/* Top Row: Gold Card and Buyer/Seller Stats */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 xl:gap-8 mb-6 md:mb-8">
              {/* Featured Gold Card */}
              <div className="relative flex xl:gap-10 gap-4 rounded-xl md:rounded-2xl px-3 xl:px-8 md:px-4 xl:py-8 py-4 text-white overflow-hidden col-span-7 xl:col-span-8 bg-gold-card-gradient">
                {/* External Link Icon */}
                <button
                  className="absolute top-4 right-4 sm:top-2 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  aria-label="Open in new window"
                >
                  <img
                    src={arrowSquareIn}
                    alt="External link"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    aria-hidden="true"
                  />
                </button>

                {/* Gold Info */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-white xl:text-2xl text-base font-bold">
                    Gold
                  </h3>
                </div>

                {/* Buy/Sell Prices */}
                <div className="grid grid-cols-2 gap-2 xl:gap-6">
                  {/* Buy */}
                  <div className="bg-white/10 backdrop-blur-sm sm:rounded-2xl rounded-xl sm:p-4 p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="sm:text-lg text-base font-semibold">
                        Buy
                      </span>
                    </div>
                    <p className="2xl:text-2xl xl:text-xl sm:text-base text-sm font-bold flex items-center xl:gap-4 gap-2">
                      2,045.23{" "}
                      <img
                        src={buyArrow}
                        alt="Buy"
                        className="xl:w-4 xl:h-4 w-3 h-3"
                        aria-hidden="true"
                      />
                    </p>
                  </div>

                  {/* Sell */}
                  <div className="bg-white/10 backdrop-blur-sm sm:rounded-2xl rounded-xl sm:p-4 p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="sm:text-lg text-base font-semibold">
                        Sell
                      </span>
                    </div>
                    <p className="2xl:text-2xl xl:text-xl sm:text-base text-sm font-bold flex items-center xl:gap-4 gap-2">
                      2,045.18{" "}
                      <img
                        src={sellArrow}
                        alt="Sell"
                        className="xl:w-4 xl:h-4 w-3 h-3"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </div>
              </div>

              {/* Buyer/Seller Stats Card */}
              <div className="col-span-5 xl:col-span-4">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between items-center mb-2 gap-4 flex-col h-24 bg-neutral-50 rounded-xl md:rounded-2xl 2xl:px-6 px-2 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm  text-neutral-600">Buyers</span>
                      <span className="text-sm font-semibold bg-gray-200 rounded-md px-1">
                        66.93%
                      </span>
                      <p className="text-xs sm:text-sm text-accent-600">
                        Low: 3686.38
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm  text-neutral-600">Sellers</span>
                      <span className="text-sm font-semibold bg-gray-200 rounded-md px-1">
                        33.07%
                      </span>
                      <p className="text-xs sm:text-sm text-primary">
                        High: 3788.96
                      </p>
                    </div>
                  </div>
                  {/* Browse All Markets CTA */}
                  <div className="mt-0 xl:mt-12 text-center">
                    <a
                      href="#all-markets"
                      className="inline-flex items-center gap-2 font-semibold text-base xl:text-lg hover:text-primary-600 transition-colors"
                    >
                      Browse all markets
                      <svg
                        className="w-5 h-5"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section - Below Gold and Stats */}
            <div className="flex flex-col sm:gap-3 gap-2">
              <div className="flex max-sm:flex-col sm:gap-6 gap-2">
                {/* Chart Image */}
                <div className="relative w-full rounded-lg overflow-hidden mb-2 2xl:mb-6">
                  <img
                    src={graphImage}
                    alt="XAU/USD Chart"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Chart Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 2xl:mb-6 gap-4">
                  {/* Time Filters - Vertical on Right */}
                  <div className="flex sm:flex-col gap-2 flex-wrap sm:flex-nowrap">
                    {timeFilters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleTimeFilterChange(filter)}
                        className={`xl:p-3 p-1 max-sm:px-2 xl:rounded-xl rounded-md text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap text-white ${
                          activeTimeFilter === filter
                            ? "bg-primary"
                            : "bg-black"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed flex items-center gap-2">
                <img
                  src={infoIcon}
                  alt="Info"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                />
                Past performance is not a reliable indicator of future results.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMarkets;
