import React, { useCallback, useMemo, memo } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline" | "ghost" | "white";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = useMemo(
    () => ({
      primary:
        "bg-primary text-white hover:bg-primary-600 focus:ring-primary-500",
      outline:
        "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary-500",
      ghost:
        "text-primary bg-transparent hover:bg-primary-50 focus:ring-primary-500",
      white: "bg-white text-primary hover:bg-neutral-100 focus:ring-white",
    }),
    []
  );

  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default memo(Button);
