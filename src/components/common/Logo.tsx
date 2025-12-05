import React, { useCallback, memo } from "react";
import logoSvg from "../../assets/images/Logo.svg";
import logoPng from "../../assets/images/Logo.png";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = "default" }) => {
  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      // Fallback to PNG if SVG fails
      const target = e.target as HTMLImageElement;
      if (target.src !== logoPng) {
        target.src = logoPng;
      }
    },
    []
  );

  const combinedClassName = `inline-flex items-center ${className}`.trim();
  const imageClassName = variant === "white" 
    ? "h-11 w-40 brightness-0 invert" 
    : "h-11 w-40";

  return (
    <a
      href="/"
      className={combinedClassName}
      aria-label="Premier Markets Home"
    >
      <img
        src={logoSvg}
        alt="Premier Markets"
        className={imageClassName}
        onError={handleImageError}
      />
    </a>
  );
};

export default memo(Logo);
