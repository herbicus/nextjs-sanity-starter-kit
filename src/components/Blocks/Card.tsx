import React from "react";
import { clsx } from "clsx";

export type CardProps = {
  children: React.ReactNode;
  elevation?: "sm" | "md" | "lg" | "xl" | "2xl";
  noPadding?: boolean;
  allowOverflow?: boolean;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  elevation,
  noPadding = false,
  allowOverflow = false,
}) => {
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl border border-gray-200",
        elevation ? shadowClasses[elevation] : "shadow-lg",
        noPadding ? "" : "p-6",
        allowOverflow ? "" : "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
