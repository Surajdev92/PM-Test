import React from "react";
import logoSvg from "../../assets/images/Logo.svg";
import logoPng from "../../assets/images/Logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Premier Markets Home"
    >
      <img
        src={logoSvg}
        alt="Premier Markets"
        className="h-11 w-40"
        onError={(e) => {
          // Fallback to PNG if SVG fails
          const target = e.target as HTMLImageElement;
          if (target.src !== logoPng) {
            target.src = logoPng;
          }
        }}
      />
    </a>
  );
};

export default Logo;
