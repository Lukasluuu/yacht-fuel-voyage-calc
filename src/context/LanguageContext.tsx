
import React, { createContext, useContext, useState, useEffect } from "react";

// Define supported languages
export type Language = "hr" | "en" | "de" | "it";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get stored language from localStorage or default to Croatian
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    return (storedLanguage as Language) || "hr";
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
