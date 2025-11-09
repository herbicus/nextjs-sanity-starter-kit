import React from "react";
import clsx from "clsx";

import { Field, Label, Radio } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

interface RadioInputProps {
  value: string;
  label: string;
  labelContent?: React.ReactNode;
  className?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({
  value,
  label,
  labelContent,
  className = "",
}) => {
  return (
    <Field
      className={clsx("group flex shrink-0 items-center gap-2", className)}
    >
      <Radio value={value} as={React.Fragment}>
        {({ checked }) => (
          <span
            className={clsx(
              "text-primary inline-block rounded-full",
              "focus:ring-1 focus:ring-offset-0 focus:outline-none"
            )}
          >
            <FontAwesomeIcon
              icon={checked ? faCircleDot : faCircle}
              className="size-4"
            />
          </span>
        )}
      </Radio>

      <Label className="text-sm/6 text-gray-900 capitalize">
        {labelContent ? labelContent : label}
      </Label>
    </Field>
  );
};

export default RadioInput;
