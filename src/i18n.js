import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAdsCategories from "./local_leng/en/AdsCategories.json";
import enHeader from "./local_leng/en/header.json";
import enmainCategories from "./local_leng/en/mainCategories.json";
import enAbout from "./local_leng/en/About.json";
import enContact from "./local_leng/en/contact.json";
import enFooter from "./local_leng/en/footer.json";
import enLogin from "./local_leng/en/Login.json";
import enRegister from "./local_leng/en/register.json";
import enPostAd from "./local_leng/en/postAd.json";


import arAdsCategories from "./local_leng/ar/AdsCategories.json";
import arHeader from "./local_leng/ar/header.json";
import armainCategories from "./local_leng/ar/mainCategories.json";
import arAbout from "./local_leng/ar/About.json";
import arContact from "./local_leng/ar/contact.json";
import arFooter from "./local_leng/ar/footer.json";
import arLogin from "./local_leng/ar/Login.json";
import arRegister from "./local_leng/ar/register.json";
import arPostAd from "./local_leng/ar/postAd.json";
 

const resources = {

  en: {
    translation: {
      ...enAdsCategories,
      ...enHeader,
      ...enmainCategories,
      ...enAbout,
      ...enContact,
      ...enFooter,
      ...enLogin,
      ...enRegister,
      ...enPostAd
    }
  },

  ar: {
    translation: {
      ...arAdsCategories,
      ...arHeader,
      ...armainCategories,
      ...arAbout,
      ...arContact,
      ...arFooter,
      ...arLogin,
      ...arRegister,
      ...arPostAd
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