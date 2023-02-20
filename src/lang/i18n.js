import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import langData from "./lang";
i18n
    .use(initReactI18next)
    .init({
        fallbackLng: localStorage.getItem("lang") || 'uz',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation: langData.ru
            },
            uz: {
                translation: langData.uz
            }
        }
    });


export default i18n;