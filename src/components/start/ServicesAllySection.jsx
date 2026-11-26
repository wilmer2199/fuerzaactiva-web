import styles from './ServicesAllySection.module.css';
import { useTranslation } from '../../context/LanguageContext';


// json para traduccion 
const SERVICES_ALLY_COPY = {
  es: {
    sectionAria: 'Respuesta 24/7 y servicios',
    responsePrefix: 'Respuesta',
    responseHighlight: '24/7',
    responseText:
      'Disponemos de coordinación operativa permanente y unidades listas para actuar ante cualquier novedad o incidencia en tus instalaciones, a cualquier hora del día.',
    consultBtn: 'Consúltanos',
    allyEyebrow: 'Fuerza Activa · Aliado Comercial',
    allyHeading: 'Un respaldo estratégico para la continuidad de tu negocio',
    allyCopy:
      'Más allá de resguardar espacios, trabajamos junto a tu empresa para prevenir interrupciones, fortalecer el control interno y brindar tranquilidad a tu equipo humano y tus operaciones diarias.',
    servicesTitle: 'Servicios',
    servicesSubtitle:
      'Soluciones diseñadas a la medida de cada operación comercial e industrial, combinando diagnóstico preventivo y presencia activa.',
    moreInfoBtn: 'Más información',
    items: [
      {
        id: 'asesoria',
        targetSection: 'servicio-asesoria',
        name: 'Asesoría',
        desc: 'Evaluamos los puntos críticos, accesos y dinámicas de tu sede para proponer medidas preventivas y esquemas de protección ajustados a la realidad de tu empresa.',
      },
      {
        id: 'vigilancia',
        targetSection: 'servicio-vigilancia',
        name: 'Vigilancia',
        desc: 'Oficiales capacitados y supervisores en campo encargados del control de accesos, rondas preventivas y resguardo constante de tus activos comerciales e industriales.',
      },
    ],
  },
  en: {
    sectionAria: '24/7 Response and services',
    responsePrefix: 'Response',
    responseHighlight: '24/7',
    responseText:
      'We have permanent operational coordination and units ready to act in response to any incident or development at your facilities, at any time of day.',
    consultBtn: 'Contact Us',
    allyEyebrow: 'Fuerza Activa · Business Partner',
    allyHeading: 'Strategic backing for your business continuity',
    allyCopy:
      'Beyond safeguarding spaces, we work alongside your company to prevent disruptions, strengthen internal control, and bring peace of mind to your team and daily operations.',
    servicesTitle: 'Services',
    servicesSubtitle:
      'Tailored solutions for every commercial and industrial operation, combining preventive diagnostics and active presence.',
    moreInfoBtn: 'More information',
    items: [
      {
        id: 'asesoria',
        targetSection: 'servicio-asesoria',
        name: 'Advisory',
        desc: 'We assess critical points, access control, and site dynamics to propose preventive measures and protection schemes tailored to your company.',
      },
      {
        id: 'vigilancia',
        targetSection: 'servicio-vigilancia',
        name: 'Guard',
        desc: 'Trained officers and field supervisors handling access control, preventive patrols, and constant protection of your commercial and industrial assets.',
      },
    ],
  },
};

export function ServicesAllySection({ onNavigate }) {
  const { lang } = useTranslation();
  const copy = SERVICES_ALLY_COPY[lang] || SERVICES_ALLY_COPY.es;

  const goTo = (e, vista, sectionId = null) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(vista, sectionId);
  };

  return (
    <section className={styles.wrapperSection} aria-label={copy.sectionAria}>
      <div className={styles.container}>
        {/* BLOQUE 1: Respuesta 24/7 + Fuerza Activa aliado comercial */}
        <div className={styles.responseBlock}>
          <div className={styles.responseCard}>
            <div className={styles.responseLeft}>
              <div className={styles.iconBadge} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div>
                <h2 className={styles.responseTitle}>
                  {copy.responsePrefix} <span>{copy.responseHighlight}</span>
                </h2>
                <p className={styles.responseText}>{copy.responseText}</p>
              </div>
            </div>

            <a
              href="#contactanos"
              className={styles.askButton}
              onClick={(e) => goTo(e, 'contactanos')}
            >
              {copy.consultBtn}
            </a>
          </div>

          <div className={styles.allyBanner}>
            <div className={styles.allyLeft}>
              <p className={styles.allyEyebrow}>{copy.allyEyebrow}</p>
              <h3 className={styles.allyHeading}>{copy.allyHeading}</h3>
              <p className={styles.allyCopy}>{copy.allyCopy}</p>
            </div>

            <a
              href="#contactanos"
              className={styles.askButton}
              onClick={(e) => goTo(e, 'contactanos')}
            >
              {copy.consultBtn}
            </a>
          </div>
        </div>

        {/* BLOQUE 2: Servicios (Asesoría y Vigilancia) */}
        <div id="servicios" className={styles.servicesBlock}>
          <header className={styles.servicesHeader}>
            <h2 className={styles.servicesTitle}>{copy.servicesTitle}</h2>
            <div className={styles.servicesUnderline} aria-hidden="true" />
            <p className={styles.servicesSubtitle}>{copy.servicesSubtitle}</p>
          </header>

          <div className={styles.servicesGrid}>
            {copy.items.map((service) => (
              <article key={service.id} id={service.id} className={styles.serviceCard}>
                <div className={styles.serviceTop}>
                  <div className={styles.iconBadge} aria-hidden="true">
                    {service.id === 'asesoria' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 11l3 3l8 -8" />
                        <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                      </svg>
                    )}
                  </div>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>

                <a
                  href={`#${service.id}`}
                  className={styles.moreInfoBtn}
                  onClick={(e) => goTo(e, 'servicios', service.targetSection)}
                >
                  {copy.moreInfoBtn}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}