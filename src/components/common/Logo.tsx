import React from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = "default" }) => {
  const textColor = variant === "white" ? "text-white" : "text-primary";

  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Premier Markets Home"
    >
      <span
        className={`text-2xl font-bold ${textColor} lowercase tracking-tight`}
      >
        premier markets
      </span>
    </a>
  );
};

export default Logo;
