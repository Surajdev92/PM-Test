import React, { useCallback, memo } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick }) => {
  const baseStyles =
    "bg-white rounded-full p-6 shadow-md hover:shadow-lg transition-shadow duration-200";

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  const combinedClassName = `${baseStyles} ${className}`.trim();
  const isInteractive = Boolean(onClick);

  return (
    <div
      className={combinedClassName}
      onClick={handleClick}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      aria-label={isInteractive ? "Clickable card" : undefined}
    >
      {children}
    </div>
  );
};

export default memo(Card);
