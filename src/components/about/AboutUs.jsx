import bannerSeguridad from '../../assets/imgf1.jpg';
import equipoTl4 from '../../assets/tl4.jpg';
import styles from '../../views/QuienesSomosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

// traduccion con json
const ABOUT_US_COPY = {
  es: {
    sectionAria: 'Quiénes somos',
    bannerAlt: 'Operaciones de Fuerza Activa de Oriente',
    bannerTitle: '¿Quiénes somos?',
    teamAlt: 'Oficiales de seguridad de Fuerza Activa de Oriente, C.A.',
    lead1Brand: 'Fuerza Activa de Oriente, C.A.',
    lead1AfterBrand:
      ' es una compañía líder dedicada a la prestación de servicios de óptima calidad en el área de vigilancia y seguridad privada, incluyendo la protección de propiedades sin armamento, ',
    lead1Location: 'con sede principal en Maturín, Estado Monagas y con presencia nacional en toda Venezuela',
    lead1End: '. Su principal interés es brindar seguridad a patrimonios propios o de terceros.',
    lead2:
      'Ofrecemos servicios de seguridad que abarcan control de acceso, control de pérdidas, servicios de protocolo en espacios públicos y privados, vigilancia en locales de recreación, en espectáculos públicos, y monitoreo de cámaras de seguridad.',
    legalBeforeArt9: 'Desarrollamos todas las actividades de lícito comercio que competen a nuestra compañía, tal como lo establecen el ',
    legalArt9: 'Artículo 9°, ordinal 1',
    legalMiddle: ' y el ',
    legalArt4: 'Artículo 4°',
    legalEnd:
      ' del Reglamento de los Servicios de Vigilancia y Seguridad Privada, publicado en la Gaceta Oficial de la República Bolivariana de Venezuela N° 6.364 Extraordinario, de fecha 16 de febrero de 2018.',
  },
  en: {
    sectionAria: 'About us',
    bannerAlt: 'Fuerza Activa de Oriente operations',
    bannerTitle: 'About Us',
    teamAlt: 'Security officers of Fuerza Activa de Oriente, C.A.',
    lead1Brand: 'Fuerza Activa de Oriente, C.A.',
    lead1AfterBrand:
      ' is a leading company dedicated to providing high-quality guard and private security services, including unarmed property protection, ',
    lead1Location: 'headquartered in Maturín, Monagas State, with nationwide presence across Venezuela',
    lead1End: '. Its primary focus is safeguarding its own assets or those of third parties.',
    lead2:
      'We offer security services covering access control, loss prevention, protocol services in public and private venues, security at entertainment venues and public events, and security camera monitoring.',
    legalBeforeArt9: 'We carry out all lawful commercial activities within our company’s scope, as established in ',
    legalArt9: 'Article 9, item 1',
    legalMiddle: ' and ',
    legalArt4: 'Article 4',
    legalEnd:
      ' of the Regulations on Private Guard and Security Services, published in the Official Gazette of the Bolivarian Republic of Venezuela No. 6,364 Extraordinary, dated February 16, 2018.',
  },
};

export function AboutUs() {
  const { lang } = useTranslation();
  const copy = ABOUT_US_COPY[lang] || ABOUT_US_COPY.es;

  return (
    <section className={styles.quienesPage} aria-label={copy.sectionAria}>
      {/* Cabecera propia de Quiénes somos con color, imagen compacta y título grande */}
      <div className={styles.heroBanner}>
        <img
          src={bannerSeguridad}
          alt={copy.bannerAlt}
          className={styles.heroBannerImg}
        />
        <div className={styles.heroBannerOverlay}>
          <h1 className={styles.heroBannerTitle}>{copy.bannerTitle}</h1>
          <div className={styles.heroBannerLine} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.bodyContainer}>
        <div className={styles.photoWrapper}>
          <img
            src={equipoTl4}
            alt={copy.teamAlt}
            className={styles.teamPhoto}
          />
        </div>

        {/* Texto institucional debajo */}
        <div className={styles.textColumn}>
          <p className={styles.leadParagraph}>
            <strong>{copy.lead1Brand}</strong>
            {copy.lead1AfterBrand}
            <strong>{copy.lead1Location}</strong>
            {copy.lead1End}
          </p>

          <p className={styles.leadParagraph}>{copy.lead2}</p>

          <div className={styles.legalBox}>
            {copy.legalBeforeArt9}
            <strong>{copy.legalArt9}</strong>
            {copy.legalMiddle}
            <strong>{copy.legalArt4}</strong>
            {copy.legalEnd}
          </div>
        </div>
      </div>
    </section>
  );
}