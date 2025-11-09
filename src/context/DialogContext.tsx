/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";

import SiteModal from "@/components/Dialog/SiteModal";

import type { SiteModalProps } from "@/components/Dialog/SiteModal";

type DialogContextType = {
  handleOpenDialog: (
    content: ReactNode,
    maxWidth?: SiteModalProps["maxWidth"]
  ) => void;
  handleCloseDialog: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [maxWidth, setMaxWidth] = useState<SiteModalProps["maxWidth"]>("xl");

  const handleOpenDialog = (
    content: ReactNode,
    maxWidth: SiteModalProps["maxWidth"] = "xl"
  ) => {
    setModalContent(content);
    setMaxWidth(maxWidth);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const contextValue = useMemo(
    () => ({ handleOpenDialog, handleCloseDialog }),
    [handleOpenDialog, handleCloseDialog]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <SiteModal
        isOpen={isOpen}
        handleClose={handleCloseDialog}
        maxWidth={maxWidth}
      >
        {modalContent}
      </SiteModal>
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
