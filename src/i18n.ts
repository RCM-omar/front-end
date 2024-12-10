import axios from "axios";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18n with the React integration
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {},
});

interface Translation {
  key: string;
  language: string;
  translation: string;
}
// Fetch translations from the backend and load them into i18next
export const fetchTranslations = async (language: string): Promise<void> => {
  try {
    const response = await axios.get(`http://localhost:5000/translations`);

    const translations = response.data.filter(
      (translation: Translation) => translation.language === language
    );

    const translationMap = translations.reduce((acc:any, { key, translation }: Translation) => {
      acc[key] = translation;
      return acc;
    }, {} as Record<string, string>);


    console.log(translationMap);
    
    i18n.addResourceBundle(language, "translation", translationMap);
    i18n.changeLanguage(language);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
};

fetchTranslations("en");

export default i18n;
