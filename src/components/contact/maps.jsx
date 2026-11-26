import styles from '../../views/ContactanosView.module.css';
import { useTranslation } from '../../context/LanguageContext';

const DOMICILIO_FISCAL =
  'Fuerza Activa de Oriente, C.A., Carretera Nacional Local Galpón CNPC Vía San Jaime, Maturín 6201, Monagas, Venezuela';

const BUSQUEDA_NEGOCIO = encodeURIComponent(
  'Fuerza Activa de Oriente, C.A., Maturín, Monagas'
);

// Mapa interactivo embebido apuntando directo a la ficha de Fuerza Activa de Oriente, C.A.
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${BUSQUEDA_NEGOCIO}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

// Enlace directo a Google Maps con "Cómo llegar" hacia el negocio
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${BUSQUEDA_NEGOCIO}`;

const MAPS_COPY = {
  es: {
    sectionAria: 'Ubicación y domicilio fiscal',
    eyebrow: 'Ubicación y cobertura',
    title: 'Encuéntranos en Maturín, Monagas',
    iframeTitle: 'Ubicación de Fuerza Activa en Google Maps',
    directionsBtn: 'Cómo llegar en Google Maps',
  },
  en: {
    sectionAria: 'Location and registered address',
    eyebrow: 'Location & coverage',
    title: 'Find us in Maturín, Monagas',
    iframeTitle: 'Fuerza Activa location on Google Maps',
    directionsBtn: 'Get directions on Google Maps',
  },
};

export function Maps() {
  const { lang } = useTranslation();
  const copy = MAPS_COPY[lang] || MAPS_COPY.es;

  return (
    <>
      <div className={styles.pageContent}>
        <div className={styles.topActions} />
        <section className={styles.mapSection} aria-label={copy.sectionAria}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{copy.title}</h2>
              <p className={styles.addressLine}>{DOMICILIO_FISCAL}</p>
            </div>

            <div className={styles.mapFrameWrap}>
              <iframe
                title={copy.iframeTitle}
                src={MAP_EMBED_URL}
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/*<a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              > 
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>{copy.directionsBtn}</span>
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}