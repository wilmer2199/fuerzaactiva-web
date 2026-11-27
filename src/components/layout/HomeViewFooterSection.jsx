import styles from './HomeViewFooterSection.module.css';
import logoEscudo from '../../assets/fasn.png';
import { useTranslation } from '../../context/LanguageContext';

const BODY_FOOTER_COPY = {
  es: {
    sectionAria: 'Contacto y cierre',
    ctaEyebrow: 'Atención directa y personalizada',
    ctaTitle: 'Resguarda tus instalaciones con el respaldo de Fuerza Activa',
    ctaSubtitle:
      'Conversemos sobre las necesidades operativas de tu empresa y diseñemos juntos un esquema de seguridad confiable y a tu medida.',
    ctaButton: '¡Contáctanos ya!',
    logoAlt: 'Escudo Fuerza Activa',
    brandName: 'FUERZA ACTIVA DE ORIENTE, C.A.',
    brandLegal: 'Seguridad Privada',
    brandDesc:
      'Más de 15 años protegiendo activos industriales y comerciales con disciplina operativa, supervisión permanente y compromiso real con cada cliente.',
    statusPill: 'Disponibilidad 24/7',
    quoteLink: 'Solicitar cotización →',
    exploreHeading: 'Explora',
    aboutLink: '¿Quiénes somos?',
    servicesLink: 'Servicios',
    channelsHeading: 'Canales directos',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Correo electrónico',
    instagramLabel: 'Instagram',
  },
  en: {
    sectionAria: 'Contact and closing',
    ctaEyebrow: 'Direct and personalized attention',
    ctaTitle: 'Protect your facilities backed by Fuerza Activa',
    ctaSubtitle:
      'Let’s talk about your company’s operational needs and design a reliable, tailored security plan together.',
    ctaButton: 'Contact us now!',
    logoAlt: 'Fuerza Activa Shield',
    brandName: 'FUERZA ACTIVA DE ORIENTE, C.A.',
    brandLegal: 'Private Security',
    brandDesc:
      'Over 15 years protecting industrial and commercial assets with operational discipline, ongoing supervision, and real commitment to every client.',
    statusPill: '24/7 Availability',
    quoteLink: 'Request a quote →',
    exploreHeading: 'Explore',
    aboutLink: 'About Us',
    servicesLink: 'Services',
    channelsHeading: 'Direct channels',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
  },
};

export function BodyFooterSection({ onNavigate }) {
  const { lang } = useTranslation();
  const copy = BODY_FOOTER_COPY[lang] || BODY_FOOTER_COPY.es;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  };

  const goTo = (e, vista) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(vista);
    scrollToTop();
  };

  return (
    <section id="contactanos" className={styles.closingWrapper} aria-label={copy.sectionAria}>
      <div className={styles.container}>
        {/* Bloque destacado: ¡Contáctanos ya! */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <p className={styles.ctaEyebrow}>{copy.ctaEyebrow}</p>
            <h2 className={styles.ctaTitle}>{copy.ctaTitle}</h2>
            <p className={styles.ctaSubtitle}>{copy.ctaSubtitle}</p>
          </div>

          <a
            href="#contactanos"
            className={styles.ctaButton}
            onClick={(e) => goTo(e, 'contactanos')}
          >
            {copy.ctaButton}
          </a>
        </div>

        {/* Footer interno del Body con marca, secciones y canales */}
        <div className={styles.bodyFooterGrid}>
          {/* Columna 1: Identidad Fuerza Activa */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <img src={logoEscudo} alt={copy.logoAlt} className={styles.brandLogo} />
              <div>
                <h3 className={styles.brandName}>{copy.brandName}</h3>
                <p className={styles.brandLegal}>{copy.brandLegal}</p>
              </div>
            </div>
            <p className={styles.brandDesc}>{copy.brandDesc}</p>
            <span className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              {copy.statusPill}
            </span>
            <a
              href="#contactanos"
              className={styles.footerCtaLink}
              onClick={(e) => goTo(e, 'contactanos')}
            >
              {copy.quoteLink}
            </a>
          </div>

          {/* Columna 2: Enlaces de navegación */}
          <div>
            <h4 className={styles.colHeading}>{copy.exploreHeading}</h4>
            <ul className={styles.navList}>
              <li>
                <a href="#quienes-somos" onClick={(e) => goTo(e, 'quienes-somos')}>
                  {copy.aboutLink}
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => goTo(e, 'servicios')}>
                  {copy.servicesLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Canales directos */}
          <div>
            <h4 className={styles.colHeading}>{copy.channelsHeading}</h4>
            <div className={styles.contactList}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/584149513574"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                </span>
                <span className={styles.contactMeta}>
                  <span className={styles.contactLabel}>{copy.whatsappLabel}</span>
                  <span className={styles.contactValue}>0414-9513574</span>
                </span>
              </a>

              {/* Correo */}
              <a
                href="mailto:fuerzaactiva.venta@gmail.com"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
                <span className={styles.contactMeta}>
                  <span className={styles.contactLabel}>{copy.emailLabel}</span>
                  <span className={styles.contactValue}>fuerzaactiva.venta@gmail.com</span>
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/fuerzaactiva.deoriente"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </span>
                <span className={styles.contactMeta}>
                  <span className={styles.contactLabel}>{copy.instagramLabel}</span>
                  <span className={styles.contactValue}>@fuerzaactiva.deoriente</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}