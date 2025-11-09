"use client";

import React, { forwardRef } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import clsx from "clsx";

interface SwitchInputProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const SwitchInput = forwardRef<HTMLButtonElement, SwitchInputProps>(
  (
    { label = "Toggle", checked, onChange, disabled = false, className = "" },
    ref
  ) => {
    return (
      <Field disabled={disabled}>
        <Label className="mb-1 block text-sm/6 font-medium text-gray-900">
          {label}
        </Label>

        <Switch
          ref={ref}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            "group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors",
            "data-checked:bg-blue-600 data-disabled:cursor-not-allowed data-disabled:opacity-50",
            className
          )}
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition-transform group-data-checked:translate-x-6" />
        </Switch>
      </Field>
    );
  }
);

SwitchInput.displayName = "SwitchInput";

export default SwitchInput;
