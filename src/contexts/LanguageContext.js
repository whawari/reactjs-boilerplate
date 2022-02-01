import { useState, useEffect, createContext, useContext } from "react";
import i18next from "i18next";

import { Loader } from "components";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

const htmlTag = document.querySelector("html");

export const LanguageProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState();

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  useEffect(() => {
    i18next.on("initialized", () => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    i18next.on("languageChanged", (lng) => {
      htmlTag.setAttribute("lang", lng.substring(0, 2));
      htmlTag.setAttribute("dir", i18next.dir(lng));

      setLanguage(lng.substring(0, 2));
    });
  }, []);

  const value = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {isLoading ? <Loader /> : children}
    </LanguageContext.Provider>
  );
};
