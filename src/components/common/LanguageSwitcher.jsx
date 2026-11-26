import { useTranslation } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label="Selector de idioma / Language selector"
    >
      <button
        type="button"
        onClick={() => setLang('es')}
        className={`${styles.langBtn} ${lang === 'es' ? styles.active : ''}`}
      >
        ES
      </button>
      <span className={styles.divider} aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
      >
        EN
      </button>
    </div>
  );
}