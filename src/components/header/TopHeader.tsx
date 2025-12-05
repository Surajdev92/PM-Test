import React, { useState } from "react";
import Container from "../common/Container";
import ukIcon from "../../assets/icons/united-kingdom.svg";

const TopHeader: React.FC = () => {
  const [activeAccountType, setActiveAccountType] = useState<
    "personal" | "institutional"
  >("personal");

  return (
    <div className="bg-white text-text-primary text-sm border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between py-2.5 flex-wrap">
          {/* Left Side - Personal/Institutional Tabs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveAccountType("personal")}
              className={`text-sm text-text-primary font-medium transition-colors pb-3 -mb-4 ${
                activeAccountType === "personal"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              aria-label="Personal Account"
            >
              Personal
            </button>
            <button
              onClick={() => setActiveAccountType("institutional")}
              className={`text-sm font-medium transition-colors pb-3 -mb-4 ${
                activeAccountType === "institutional"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              aria-label="Institutional Account"
            >
              Institutional
            </button>
          </div>

          {/* Right Side - WebTrader, Support, Open Demo, Language */}
          <div className="flex items-center max-sm:text-xs max-sm:w-full max-sm:mt-4 max-sm:border-t border-neutral-200 pt-2">
            <a
              href="#webtrader"
              className="hover:text-primary transition-colors text-text-primary font-medium px-3 border-r border-neutral-300"
              aria-label="WebTrader"
            >
              WebTrader
            </a>
            <a
              href="#support"
              className="hover:text-primary transition-colors text-text-primary font-medium px-3 border-r border-neutral-300"
              aria-label="Support"
            >
              Support
            </a>
            <a
              href="#demo"
              className="hover:text-primary transition-colors text-text-primary font-medium px-3 border-r border-neutral-300"
              aria-label="Open Demo Account"
            >
              Open Demo
            </a>
            <div className="flex items-center gap-2 pl-3">
              {/* Language Icon */}
              <img
                src={ukIcon}
                alt="Language"
                className="w-7 h-7"
                aria-hidden="true"
              />
              <button
                className="flex items-center gap-1 hover:text-primary transition-colors text-text-primary font-medium"
                aria-label="Select Language"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
