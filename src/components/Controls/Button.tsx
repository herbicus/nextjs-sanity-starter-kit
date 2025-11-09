"use client";

import React from "react";
import Link from "next/link";
import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  theme?: "primary" | "secondary" | "tertiary";
  tone?: "high" | "medium" | "low";
  size?: "sm" | "base" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  theme = "primary",
  tone = "high",
  size = "base",
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) => {
  // Theme-based classes (for high emphasis)
  const themeClasses = {
    primary:
      "text-white bg-primary border-primary hover:bg-blue-800 hover:border-blue-800 focus:ring-blue-500",
    secondary:
      "text-white bg-secondary border-secondary hover:bg-gray-700 hover:border-gray-900 focus:ring-gray-500",
    tertiary:
      "text-black bg-tertiary border-tertiary hover:bg-gray-300 hover:border-gray-300 focus:ring-gray-400",
  };

  // Get text color based on theme for medium/low tones
  const getTextColorForTheme = (
    buttonTheme: "primary" | "secondary" | "tertiary"
  ) => {
    switch (buttonTheme) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "tertiary":
        return "text-gray-700"; // Darker than border for better readability
      default:
        return "";
    }
  };

  // Dynamic tone classes based on the selected theme
  const getToneClass = () => {
    if (tone === "high") return "";

    const textColor = getTextColorForTheme(theme);

    if (tone === "medium") {
      return `bg-transparent border-current ${textColor} hover:bg-current/10 hover:border-transparent`;
    }

    if (tone === "low") {
      return `bg-transparent border-transparent ${textColor} hover:border-current`;
    }

    return "";
  };

  // Size-based classes
  const sizeClasses = {
    sm: "text-sm py-1.5 px-3",
    base: "text-base py-2 px-4",
    lg: "text-lg py-2.5 px-5",
  };

  // Base classes for all buttons
  const baseClasses =
    "cursor-pointer font-medium rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  // Check if link is external
  const isExternalLink =
    href?.startsWith("http://") || href?.startsWith("https://");

  // Combined classes
  const buttonClasses = clsx(
    baseClasses,
    tone === "high" ? themeClasses[theme] : "",
    getToneClass(),
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  // Render as Link if href is provided
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(isExternalLink
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <HeadlessButton
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
