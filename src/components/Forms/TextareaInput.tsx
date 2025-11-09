import React, { TextareaHTMLAttributes } from "react";
import { Field, Textarea, Label } from "@headlessui/react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TextareaInputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label: string;
  icon?: IconDefinition;
  disabled?: boolean;
  className?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
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
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-indigo-600">
          {icon && (
            <div className="shrink-0 pt-2 pl-3 text-gray-900 select-none sm:text-sm/6">
              <FontAwesomeIcon
                icon={icon}
                aria-hidden="true"
                className="pointer-events-none size-4"
              />
            </div>
          )}
          <Textarea
            className={clsx(
              "block min-w-0 grow p-3",
              "resize-y text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6",
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

export default TextareaInput;
