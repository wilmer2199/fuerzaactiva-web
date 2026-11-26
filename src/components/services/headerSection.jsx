import bannerSeguridad from '../../assets/imgf1.jpg';
import styles from '../../views/ServiciosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

const HEADER_SECTION_COPY = {
  es: {
    sectionAria: 'Servicios',
    bannerAlt: 'Servicios de Fuerza Activa de Oriente',
    title: 'Servicios',
  },
  en: {
    sectionAria: 'Services',
    bannerAlt: 'Fuerza Activa de Oriente Services',
    title: 'Services',
  },
};

export function HeaderSection() {
  const { lang } = useTranslation();
  const copy = HEADER_SECTION_COPY[lang] || HEADER_SECTION_COPY.es;

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