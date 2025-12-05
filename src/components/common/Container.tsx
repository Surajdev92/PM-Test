import React, { memo } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  const baseStyles = "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8";
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

export default memo(Container);
