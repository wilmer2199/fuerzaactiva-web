import styles from '../../views/QuienesSomosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';


//traduccion con json
const SOLVENCY_COPY = {
  es: {
    sectionAria: 'Solvencia y Legalidad',
    title: 'Solvencia y Legalidad',
    desc: 'Contamos con todas las autorizaciones y licencias requeridas para operar legalmente, ofreciendo un servicio confiable y certificado.',
  },
  en: {
    sectionAria: 'Good Standing and Legality',
    title: 'Solvency and Legality',
    desc: 'We hold all authorizations and licenses required to operate legally, delivering a reliable and certified service.',
  },
};

const ENTES = ['SENIAT', 'INCES', 'IVSS', 'MINTRA', 'FAOV', 'DIGESERVISP'];

export function SolvencyLegality() {
  const { lang } = useTranslation();
  const copy = SOLVENCY_COPY[lang] || SOLVENCY_COPY.es;

  return (
    <section className={styles.solvenciaSection} aria-label={copy.sectionAria}>
      <div className={styles.solvenciaCard}>
        <div className={styles.solvenciaIconWrap} aria-hidden="true">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        </div>

        <h2 className={styles.solvenciaTitle}>{copy.title}</h2>
        <div className={styles.solvenciaUnderline} aria-hidden="true" />

        <p className={styles.solvenciaDesc}>{copy.desc}</p>

        <ul className={styles.entesGrid}>
          {ENTES.map((ente) => (
            <li key={ente} className={styles.enteBadge}>
              {ente}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}