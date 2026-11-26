import bannerSeguridad from '../../assets/imgf1.jpg';
import styles from '../../views/ContactanosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

const HEADER_CONTACT_COPY = {
  es: {
    sectionAria: 'Contáctanos',
    bannerAlt: 'Fuerza Activa de Oriente - Contáctanos',
    title: 'Contáctanos',
  },
  en: {
    sectionAria: 'Contact Us',
    bannerAlt: 'Fuerza Activa de Oriente - Contact Us',
    title: 'Contact Us',
  },
};

export function HeaderContact() {
  const { lang } = useTranslation();
  const copy = HEADER_CONTACT_COPY[lang] || HEADER_CONTACT_COPY.es;

  return (
    <section className={styles.quienesPage} aria-label={copy.sectionAria}>
      <div className={styles.heroBanner}>
        <img
          src={bannerSeguridad}
          alt={copy.bannerAlt}
          className={styles.heroBannerImg}
        />
        <div className={styles.heroBannerOverlay}>
          <h1 className={styles.heroBannerTitle}>{copy.title}</h1>
          <div className={styles.heroBannerLine} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}