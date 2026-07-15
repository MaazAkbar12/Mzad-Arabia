import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAdsCategories from "./local_leng/en/AdsCategories.json";
import enHeader from "./local_leng/en/header.json";
import enmainCategories from "./local_leng/en/mainCategories.json";
import enAbout from "./local_leng/en/About.json";

import arAdsCategories from "./local_leng/ar/AdsCategories.json";
import arHeader from "./local_leng/ar/header.json";
import armainCategories from "./local_leng/ar/mainCategories.json";
import arAbout from "./local_leng/ar/About.json";

 

const resources = {

  en: {
    translation: {
      ...enAdsCategories,
      ...enHeader,
      ...enmainCategories,
      ...enAbout
    }
  },

  ar: {
    translation: {
      ...arAdsCategories,
      ...arHeader,
      ...armainCategories,
      ...arAbout
    }
  }

};

 

i18n
.use(initReactI18next)
.init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation:{
    escapeValue:false
  }
});


export default i18n;