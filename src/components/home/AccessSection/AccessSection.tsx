import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import manWithHand from "../../../assets/images/Man with hand.png";
import threeCoins from "../../../assets/images/Three Coins.png";

const AccessSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Top Section - White Background */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Join <span className="text-primary">50,000+</span> traders who
              trust us
            </h2>
          </div>

          {/* Right Side - Paragraph and Buttons */}
          <div className="flex flex-col gap-6">
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Experience advanced trading tools, transparent and competitive
              pricing, lightning-fast execution, and dedicated support trusted
              by traders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                label="Start Trading"
                variant="primary"
                onClick={() => {}}
                className="w-full sm:w-auto"
              />
              <Button
                label="Try Demo Account"
                variant="outline"
                onClick={() => {}}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Section - Red Gradient Banner */}
      <Container>
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary-700 to-primary-800 text-white overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
            {/* Left Side - Images */}
            <div className="relative flex items-center justify-center lg:justify-start h-64 md:h-80">
              <div className="relative w-full h-full flex items-center">
                {/* Three Coins image - positioned behind */}
                <div className="absolute -right-64 top-1/2 -translate-y-1/2 z-0">
                  <img
                    src={threeCoins}
                    alt="Currency coins"
                    className="w-full h-80 object-cover opacity-90"
                  />
                </div>
                {/* Man with hand image - positioned in front, extending outside */}
                <div className="relative z-10 lg:ml-40 -mt-4">
                  <img
                    src={manWithHand}
                    alt="Trader"
                    className="h-72 lg:h-[25rem] mb-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text and Button */}
            <div className="flex flex-col gap-6 justify-center pl-28 pr-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Everything you need to trade the markets
              </h2>
              <div>
                <div
                  className="inline-block rounded-full p-[2px]"
                  style={{
                    background:
                      "linear-gradient(90.64deg, #6D0002 -2.57%, #FFFFFF 108.74%)",
                    boxShadow: `
                      0px 4px 24px 0px rgba(255, 74, 74, 0.25),
                      0px 4px 34px 0px rgba(255, 0, 0, 0.25),
                      0px 4px 34px 0px rgba(255, 255, 255, 0.25)
                    `,
                  }}
                >
                  <button
                    className="px-6 py-3 text-white rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #390507 0%, #962020 100%)",
                    }}
                    onClick={() => {}}
                  >
                    Explore Accounts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AccessSection;
