import React, { InputHTMLAttributes } from "react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SiteInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  icon?: IconDefinition;
  disabled?: boolean;
  className?: string;
}

const SiteInput: React.FC<SiteInputProps> = ({
  label,
  icon,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <Field disabled={disabled}>
      <Label className="block text-sm/6 font-medium text-gray-900">
        {label}
      </Label>

      <div className="mt-1">
        <div
          className={clsx(
            "flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300",
            "has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
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
          <Input
            className={clsx(
              "block min-w-0 grow py-1.5",
              "pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6",
              icon ? "pl-1" : "pl-3",
              className
            )}
            {...props}
          />
        </div>
      </div>
    </Field>
  );
};

export default SiteInput;
