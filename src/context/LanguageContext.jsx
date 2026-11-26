import { createContext, useContext, useEffect, useState } from 'react';
import es from '../locales/es.json';
import en from '../locales/en.json';

const dictionaries = { es, en };
const LanguageContext = createContext(null);

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('site_lang');
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    const currentValue = getByPath(dictionaries[lang], key);
    if (currentValue !== undefined) return currentValue;
    const fallbackValue = getByPath(dictionaries.es, key);
    return fallbackValue !== undefined ? fallbackValue : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation debe usarse dentro de LanguageProvider');
  }
  return ctx;
}