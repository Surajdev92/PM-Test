import React from "react";
import Container from "../../common/Container";
import growthIcon from "../../../assets/icons/Growth.png";
import priceCompareIcon from "../../../assets/icons/Price Compare.png";
import alarmIcon from "../../../assets/icons/Alarm.png";
import bellIcon from "../../../assets/icons/Bell.png";
import logoIcon from "../../../assets/icons/Logo Icon.png";
import checksBg1 from "../../../assets/images/checks_bg1.png";
import checksBg2 from "../../../assets/images/checks_bg2.png";
import checksBg3 from "../../../assets/images/checks_bg3.png";
import checksBg4 from "../../../assets/images/checks_bg4.png";
import mainBg from "../../../assets/images/main-bg.png";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  bgImage: string;
  borderClasses: string; // For selective borders
}

const EmpowerTrading: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: growthIcon,
      title: "Charting tools and indicators",
      description:
        "Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators.",
      bgImage: checksBg1,
      borderClasses: "", // Top-left: right and bottom borders
    },
    {
      icon: priceCompareIcon,
      title: "Get flexible leverage",
      description:
        "Trade larger positions and maximise your return potential with lower margin requirements.",
      bgImage: checksBg2,
      borderClasses: "", // Top-right: bottom border only
    },
    {
      icon: alarmIcon,
      title: "Round-the-clock support",
      description:
        "Our dedicated experts are available 24/5 to guide and assist you at every step.",
      bgImage: checksBg3,
      borderClasses: "", // Bottom-left: right border only
    },
    {
      icon: bellIcon,
      title: "Customisable price alerts",
      description:
        "Set real-time alerts to track asset movements and stay ahead with your strategy.",
      bgImage: checksBg4,
      borderClasses: "", // Bottom-right: no border
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-neutral-900">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={mainBg}
          alt=""
          className="w-full h-[645px] object-cover"
          aria-hidden="true"
        />
      </div>
      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Empower Your Trading
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto">
              Unlock advanced tools, insights, and support to maximise your
              trading potential.
            </p>
          </div>

          {/* Features Grid with Center Logo */}
          <div className="relative max-w-6xl mx-auto">
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[600px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-8 border-white/20 ${feature.borderClasses} overflow-hidden`}
                >
                  {/* Background Image for each card */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={feature.bgImage}
                      alt=""
                      className="w-full h-full object-cover"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center items-center text-center lg:px-20 px-4">
                    {/* Icon */}
                    <div className="mb-6">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Center Logo - positioned absolutely in the center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none max-sm:hidden">
                <div className="w-20 h-20 border-4 border-white rounded-full bg-primary flex items-center justify-center shadow-2xl">
                  <img
                    src={logoIcon}
                    alt="Premier Markets"
                    className="w-10 h-6 object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmpowerTrading;
