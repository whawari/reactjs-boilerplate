import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import HttpBackend from "i18next-http-backend";
import axios from "axios";

import { KEYS, CONSTANTS } from "utils";

i18n
  .use(initReactI18next)
  .use(ChainedBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en"],
    load: "languageOnly",
    debug: false,
    react: {
      useSuspense: false,
    },

    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: CONSTANTS.i18nCacheExpirationTime,
        },
        {
          loadPath: KEYS.translationUrl + "/locales/{{lng}}/{{ns}}.json",
        },
        {
          parse: (data) => {
            return data;
          },
        },
        {
          request: async (options, url, payload, callback) => {
            try {
              let res = await axios.get(url);

              callback(null, res);
            } catch (error) {
              callback(error, null);
            }
          },
        },
      ],
    },
  });

export default i18n;
