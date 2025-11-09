"use client";

import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { clsx } from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export type SiteModalProps = {
  isOpen: boolean;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "portrait"
    | "landscape"
    | "screen-xl"
    | "screen-2xl";
  handleClose: () => void;
  children: React.ReactNode;
};

// Map of maxWidth variants to their corresponding classes
const maxWidthClasses = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  portrait: "sm:max-w-3xl",
  landscape: "sm:max-w-5xl",
  "screen-xl": "sm:max-w-screen-xl",
  "screen-2xl": "sm:max-w-screen-2xl",
};

const getModalPanelClasses = (maxWidth: SiteModalProps["maxWidth"] = "xl") => {
  return clsx(
    // Base classes
    "relative isolate w-full transform rounded bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
    // Apply the correct maxWidth class
    maxWidthClasses[maxWidth]
  );
};

const SiteModal: React.FC<SiteModalProps> = ({
  isOpen,
  maxWidth = "xl",
  handleClose,
  children,
}) => {
  return (
    <Dialog
      as="div"
      className="relative z-150"
      open={isOpen}
      onClose={handleClose}
    >
      <DialogBackdrop
        transition
        className="bg-opacity-75 fixed inset-0 bg-gray-500/70 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <TransitionChild>
          <div className="absolute top-4 right-4 flex duration-500 ease-in-out data-closed:opacity-0">
            <button
              type="button"
              onClick={handleClose}
              className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
            >
              <span className="absolute -inset-2.5" />
              <span className="sr-only">Close Dialog</span>
              <FontAwesomeIcon
                icon={faXmark}
                className="block size-6!"
                aria-hidden="true"
              />
            </button>
          </div>
        </TransitionChild>

        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className={getModalPanelClasses(maxWidth)} transition>
            <div className="relative isolate w-full overflow-hidden rounded">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SiteModal;
