import React from "react";
import clsx from "clsx";

import { Checkbox, Field, Label } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface CheckboxInputProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  labelContent?: React.ReactNode;
  className?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  checked,
  onChange,
  label,
  labelContent,
  className = "",
}) => {
  return (
    <Field className={clsx("flex items-center gap-2", className)}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        className={clsx(
          "group border-primary relative m-0.5 size-4 rounded border bg-transparent transition-colors duration-200 focus:ring-1 focus:ring-offset-1 focus:outline-none",
          "data-checked:bg-primary"
        )}
      >
        <FontAwesomeIcon
          icon={faCheck}
          className={clsx(
            "absolute inset-0 h-4 w-4 stroke-gray-700 text-gray-700 opacity-0 transition-opacity duration-200 group-data-checked:opacity-100",
            "group-data-checked:stroke-white group-data-checked:text-white"
          )}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.75)",
          }}
        />
      </Checkbox>
      <Label className="text-sm/6 text-gray-900 capitalize">
        {labelContent ? labelContent : label}
      </Label>
    </Field>
  );
};

export default CheckboxInput;
