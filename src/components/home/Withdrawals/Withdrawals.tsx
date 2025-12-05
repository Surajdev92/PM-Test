import React from "react";
import Container from "../../common/Container";
import rocketIcon from "../../../assets/icons/Rocket.png";
import securityIcon from "../../../assets/icons/Security.png";
import validatedIcon from "../../../assets/icons/Validated.png";
import withdrawalsBanner from "../../../assets/images/withdrawls-banner.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Withdrawals: React.FC = () => {
  const features: Feature[] = [
    {
      icon: rocketIcon,
      title: "Ultra-Fast Processing",
      description:
        "Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.",
    },
    {
      icon: securityIcon,
      title: "Secure & Transparent",
      description:
        "Tier 1 banking and custody partners keep your funds protected at every stage.",
    },
    {
      icon: validatedIcon,
      title: "Effortless Access",
      description:
        "Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Subheading */}
          <p className="text-primary font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-4 mx-auto">
            Access your funds anytime, anywhere.
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8 mx-auto px-4">
            Seamless Withdrawals
          </h2>
        </div>

        <div
          className="p-4 sm:p-6 md:p-8 lg:p-12 xl:px-20 xl:py-16 rounded-2xl sm:rounded-3xl relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
          style={{
            background:
              "linear-gradient(102.54deg, #FFDFDF -11.21%, #FFFCFC 23.26%, #FFD5D6 95.34%)",
          }}
        >
          {/* Left Side - Text Content */}
          <div className="relative z-10 max-w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
            {/* Feature Cards */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex group gap-3 sm:gap-4 md:gap-6 items-start rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-white/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FFDADA] rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Banner Image (Absolute Positioned) */}
          <div className="hidden sm:block absolute bottom-0 right-0 z-0 pointer-events-none">
            <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] 2xl:w-full">
              <img
                src={withdrawalsBanner}
                alt="Seamless Withdrawals"
                className="w-full h-auto object-contain max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[640px]"
              />
            </div>
          </div>

          {/* Mobile Image - Below Content */}
          <div className="sm:hidden mt-8 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src={withdrawalsBanner}
                alt="Seamless Withdrawals"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Withdrawals;
