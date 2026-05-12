"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import ValidationModal from "../components/ValidationModal";

const ValidationContext = createContext();

export const useValidation = () => {
  const context = useContext(ValidationContext);
  if (!context) {
    throw new Error("useValidation must be used within a ValidationProvider");
  }
  return context;
};

export const ValidationProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    errors: [],
  });

  const showError = useCallback((title, message, errors = []) => {
    setModalState({
      isOpen: true,
      title,
      message,
      errors: Array.isArray(errors) ? errors : [errors],
    });
  }, []);

  const closeError = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <ValidationContext.Provider value={{ showError, closeError }}>
      {children}
      <ValidationModal
        isOpen={modalState.isOpen}
        onClose={closeError}
        title={modalState.title}
        message={modalState.message}
        errors={modalState.errors}
      />
    </ValidationContext.Provider>
  );
};
