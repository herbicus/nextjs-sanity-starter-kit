"use client";

import React from "react";
import clsx from "clsx";

import { Fieldset, Legend } from "@headlessui/react";
import CheckboxInput from "./CheckboxInput";

interface CheckboxOption {
  id: string;
  name: string | React.ReactNode;
}

interface CheckboxFieldsetProps {
  legend: string;
  hideLegend?: boolean;
  options: CheckboxOption[];
  selectedValues: string[];
  layout?: 1 | 2;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const CheckboxFieldset: React.FC<CheckboxFieldsetProps> = ({
  legend,
  hideLegend = false,
  options,
  selectedValues,
  layout = 1,
  onChange,
  disabled = false,
  className = "",
}) => {
  const handleCheckboxChange = (optionId: string) => {
    onChange(optionId);
  };

  return (
    <Fieldset className={clsx(className)} disabled={disabled}>
      <Legend
        className={`mb-2 text-sm font-medium ${hideLegend ? "sr-only" : ""}`}
      >
        {legend}
      </Legend>

      <div
        className={clsx(layout === 1 ? "space-y-2" : "grid grid-cols-2 gap-4")}
      >
        {options.map((option, index) => {
          const key = `checkbox-fieldset-item-${option.id}-${index}`;
          return (
            <CheckboxInput
              key={key}
              checked={selectedValues.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
              label={typeof option.name === "string" ? option.name : ""}
              labelContent={
                typeof option.name === "string" ? undefined : option.name
              }
            />
          );
        })}
      </div>
    </Fieldset>
  );
};

export default CheckboxFieldset;
