import React, { SelectHTMLAttributes } from "react";
import { Field, Select, Label } from "@headlessui/react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SelectInputProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label: string;
  icon?: IconDefinition;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  icon,
  disabled = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <Field disabled={disabled}>
      <Label className="block text-sm/6 font-medium text-gray-900">
        {label}
      </Label>

      <div className="relative mt-1">
        <div
          className={clsx(
            "flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300",
            "has-[select:focus-within]:outline-2 has-[select:focus-within]:-outline-offset-2 has-[select:focus-within]:outline-indigo-600"
          )}
        >
          {icon && (
            <div className="shrink-0 text-gray-900 select-none sm:text-sm/6">
              <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
                className="pointer-events-none size-4"
              />
            </div>
          )}
          <Select
            className={clsx(
              "block min-w-0 grow appearance-none py-1.5",
              "border-0 bg-transparent pr-8 text-base text-gray-900 focus:outline-none sm:text-sm/6",
              icon ? "pl-1" : "pl-3",
              className
            )}
            {...props}
          >
            {children}
          </Select>

          <FontAwesomeIcon
            icon={faChevronDown}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 size-3 -translate-y-1/2"
          />
        </div>
      </div>
    </Field>
  );
};

export default SelectInput;
