import vigilanciaImg from '../../assets/anotando3.jpg';
import styles from '../../views/ServiciosView.module.css';
import { useTranslation } from '../../context/LanguageContext';

const GUARD_COPY = {
  es: {
    sectionAria: 'Vigilancia y patrullaje',
    eyebrow: 'Vigilancia y patrullaje',
    title: 'Resguardo físico activo y control operativo continuo',
    leadBeforeBrand:
      'La seguridad de tus instalaciones requiere experiencia, compromiso y vigilancia constante. ',
    leadBrand: 'FUERZA ACTIVA',
    leadAfterBrand:
      ' ponemos a tu disposición un equipo de profesionales capacitados para proteger tus activos y garantizar un entorno seguro.',
    imgAlt: 'Personal y despliegue operativo de Fuerza Activa',
    solutionsHeading: '¿Qué soluciones ponemos a tu alcance?',
    solutionsText:
      'Diseñamos servicios de seguridad adaptados a las características y necesidades de cada cliente. Contamos con personal debidamente uniformado, capacitado y equipado para garantizar el control, la prevención y el resguardo de tus instalaciones:',
    roles: [
      'Operadores de control de acceso (Recepcionista)',
      'Vigilantes privados',
      'Supervisores de instalaciones',
    ],
    selectionEyebrow: 'Estándar de selección',
    selectionTitle: 'Seleccionamos personal capacitado y lo evaluamos constantemente',
    selectionText:
      'Cada postulante pasa por pruebas rigurosas antes de ingresar, y el seguimiento continúa de manera periódica para asegurar desempeño constante en campo.',
    filters: [
      {
        id: 'historial',
        titulo: 'Revisión de antecedentes y trayectoria laboral',
        icono: 'historial',
      },
      {
        id: 'aptitud',
        titulo: 'Evaluación de condición física y salud',
        icono: 'salud',
      },
      {
        id: 'psicologico',
        titulo: 'Evaluación psicológica y criterio operativo',
        icono: 'psicologico',
      },
      {
        id: 'experiencia',
        titulo: 'Experiencia en seguridad privada y protección',
        icono: 'experiencia',
      },
    ],
    ctaNote: 'Coordina un esquema de vigilancia adaptado a tu empresa.',
    ctaBtn: 'Solicitar cotización',
  },
  en: {
    sectionAria: 'Guard services and patrolling',
    eyebrow: 'Guard services & patrolling',
    title: 'Active physical protection and continuous operational control',
    leadBeforeBrand:
      'Securing your facilities requires experience, commitment, and constant vigilance. At ',
    leadBrand: 'FUERZA ACTIVA',
    leadAfterBrand:
      ', we place a team of trained professionals at your service to protect your assets and ensure a safe environment.',
    imgAlt: 'Fuerza Activa personnel and operational deployment',
    solutionsHeading: 'What solutions do we put within your reach?',
    solutionsText:
      'We design security services tailored to the characteristics and needs of each client. Our personnel are properly uniformed, trained, and equipped to guarantee access control, prevention, and protection of your facilities:',
    roles: [
      'Access control operators (Receptionist)',
      'Private security officers',
      'Facility supervisors',
    ],
    selectionEyebrow: 'Selection standard',
    selectionTitle: 'We select trained personnel and evaluate them continuously',
    selectionText:
      'Every applicant undergoes rigorous screening prior to onboarding, and ongoing periodic evaluations ensure consistent field performance.',
    filters: [
      {
        id: 'historial',
        titulo: 'Background and employment history verification',
        icono: 'historial',
      },
      {
        id: 'aptitud',
        titulo: 'Physical fitness and health assessment',
        icono: 'salud',
      },
      {
        id: 'psicologico',
        titulo: 'Psychological screening and operational judgment',
        icono: 'psicologico',
      },
      {
        id: 'experiencia',
        titulo: 'Experience in private security and protection',
        icono: 'experiencia',
      },
    ],
    ctaNote: 'Coordinate a guard scheme tailored to your company.',
    ctaBtn: 'Request a quote',
  },
};

function IconoFiltro({ tipo }) {
  if (tipo === 'historial') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    );
  }
  if (tipo === 'salud') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    );
  }
  if (tipo === 'psicologico') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a7 7 0 0 0-7 7c0 2.6 1.4 4.8 3.5 6v3h7v-3c2.1-1.2 3.5-3.4 3.5-6a7 7 0 0 0-7-7z" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function Guard({ onNavigate }) {
  const { lang } = useTranslation();
  const copy = GUARD_COPY[lang] || GUARD_COPY.es;

  const goTo = (e, vista, sectionId = null) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(vista, sectionId);
  };

  return (
    <section
      id="servicio-vigilancia"
      className={styles.vigilanciaSection}
      aria-label={copy.sectionAria}
    >
      <div className={styles.vigilanciaCard}>
        <div className={styles.vigilanciaHeader}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.lead}>
            {copy.leadBeforeBrand}
            <strong>{copy.leadBrand}</strong>
            {copy.leadAfterBrand}
          </p>
        </div>

        <div className={styles.vigilanciaSplit}>
          <div className={styles.vigilanciaMediaBox}>
            <img
              src={vigilanciaImg}
              alt={copy.imgAlt}
              className={styles.vigilanciaImg}
            />
          </div>

          <div className={styles.vigilanciaInfoCol}>
            <h3 className={styles.panelHeading}>{copy.solutionsHeading}</h3>
            <p className={styles.panelText}>{copy.solutionsText}</p>

            <ul className={styles.rolesList}>
              {copy.roles.map((rol) => (
                <li key={rol} className={styles.checkItem}>
                  <span className={styles.checkMark} aria-hidden="true">✓</span>
                  <span>{rol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.seleccionBox}>
          <div className={styles.seleccionIntro}>
            <p className={styles.eyebrow}>{copy.selectionEyebrow}</p>
            <h2 className={styles.title}>{copy.selectionTitle}</h2>
            <p className={styles.panelText}>{copy.selectionText}</p>
          </div>

          <div className={styles.filtrosGrid}>
            {copy.filters.map((filtro) => (
              <div key={filtro.id} className={styles.filtroCard}>
                <span className={styles.filtroIcono}>
                  <IconoFiltro tipo={filtro.icono} />
                </span>
                <p className={styles.filtroTexto}>{filtro.titulo}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaStack}>
          <p className={styles.ctaNote}>{copy.ctaNote}</p>
          <a
            href="#contactanos"
            className={styles.ctaBtn}
            onClick={(e) => goTo(e, 'contactanos')}
          >
            {copy.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}