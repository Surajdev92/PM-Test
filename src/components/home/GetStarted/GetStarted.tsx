import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import handClickingMobile from "../../../assets/images/Hand Clicking Mobile.png";

const GetStarted: React.FC = () => {
  const steps = [
    { number: 1, label: "Register" },
    { number: 2, label: "Fund" },
    { number: 3, label: "Start Trading" },
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-2xl text-white overflow-hidden h-[328px] xl:h-[370px] bg-get-started-bg-gradient">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 xl:px-16 py-12 md:py-16">
            {/* Left Side - Steps and Content */}
            <div className="flex flex-col gap-8">
              {/* Steps */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-3">
                    {/* Wrapper for gradient border */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 p-[2px] bg-step-border-gradient">
                      <div className="w-full h-full rounded-full flex items-center justify-center font-bold text-white bg-step-bg-gradient">
                        {step.number}
                      </div>
                    </div>
                    <span className="text-base md:text-md xl:text-2xl font-semibold text-white">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Descriptive Text */}
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Ready to trade smarter? Get instant access to global markets
                with reliable tools and 24/5 support.
              </p>

              {/* CTA Button */}
              <div>
                <Button
                  label="Get Started"
                  variant="white"
                  onClick={() => {}}
                  className="bg-white text-primary hover:bg-neutral-100"
                />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full">
                <img
                  src={handClickingMobile}
                  alt="Mobile trading"
                  className="w-full h-[470px] object-contain transform translate-x-16 -translate-y-24"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
