import React from "react";
import { clsx } from "clsx";
import Button from "./Button";

// Define the shape of button data coming from Sanity
export type ButtonData = {
  id?: string;
  label: string;
  href?: string;
  theme?: "primary" | "secondary" | "tertiary";
  tone?: "high" | "medium" | "low";
  size?: "sm" | "base" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type ButtonBarProps = {
  buttons: ButtonData[];
  className?: string;
  alignment?: "left" | "center" | "right";
  spacing?: "tight" | "normal" | "wide";
};

const ButtonBar: React.FC<ButtonBarProps> = ({
  buttons,
  className,
  alignment = "left",
  spacing = "normal",
}) => {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const spacingClasses = {
    tight: "gap-2",
    normal: "gap-4",
    wide: "gap-6",
  };

  if (!buttons || buttons.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center",
        alignmentClasses[alignment],
        spacingClasses[spacing],
        className
      )}
    >
      {buttons.map((buttonData, index) => (
        <Button
          key={buttonData.id || `button-${index}`}
          href={buttonData.href}
          theme={buttonData.theme}
          tone={buttonData.tone}
          size={buttonData.size}
          onClick={buttonData.onClick}
          type={buttonData.type as "button" | "submit" | "reset"}
          disabled={buttonData.disabled}
        >
          {buttonData.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonBar;
