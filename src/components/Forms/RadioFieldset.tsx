"use client";

import React from "react";
import clsx from "clsx";

import { Fieldset, Legend, RadioGroup } from "@headlessui/react";
import RadioInput from "./RadioInput";

interface RadioOption {
  id: string;
  name: string | React.ReactNode;
}

interface RadioFieldsetProps {
  legend: string;
  hideLegend?: boolean;
  options: RadioOption[];
  value: string;
  layout?: 1 | 2;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const RadioFieldset: React.FC<RadioFieldsetProps> = ({
  legend,
  hideLegend = false,
  options,
  value,
  layout = 1,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <Fieldset className={clsx(className)} disabled={disabled}>
      <Legend
        className={`mb-2 text-sm font-medium ${hideLegend ? "sr-only" : ""}`}
      >
        {legend}
      </Legend>

      <RadioGroup
        className={clsx(layout === 1 ? "space-y-2" : "grid grid-cols-2 gap-4")}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => {
          const key = `radio-fieldset-item-${option.id}-${index}`;
          return (
            <RadioInput
              key={key}
              value={option.id}
              label={typeof option.name === "string" ? option.name : ""}
              labelContent={
                typeof option.name === "string" ? undefined : option.name
              }
            />
          );
        })}
      </RadioGroup>
    </Fieldset>
  );
};

export default RadioFieldset;
