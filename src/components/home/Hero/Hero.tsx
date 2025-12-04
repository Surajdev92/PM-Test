import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import curvedDivider from "../../../assets/images/Curved White Divider.png";
import bannerMobile from "../../../assets/images/Banner Mobile.png";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20">
        <img
          src={curvedDivider}
          alt=""
          className="w-full h-auto object-cover"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="relative z-10 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 pr-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trade Forex with Premier Markets
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                Access global markets with advanced trading tools, competitive
                spreads, and institutional grade execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  label="Start Trading"
                  variant="white"
                  onClick={() => {}}
                />
                <Button
                  label="Try Demo Account"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Right Column - Banner Mobile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src={bannerMobile}
                  alt="Premier Markets Mobile App"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
