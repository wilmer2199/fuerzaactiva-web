import digeservispLogo from '../../assets/GIGESERVISP LOGO.png';
import styles from '../../views/QuienesSomosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

//traduccion con jason
const STAFF_ATTIRE_COPY = {
  es: {
    sectionAria: 'Política de Selección de Personal y Vestimenta del Personal',
    selectionTitle: 'Política de Selección de Personal',
    selectionIntro:
      'Nuestra Empresa, a través de la oficina de Recursos Humanos, exige a los aspirantes a ingresar como Oficiales de seguridad las siguientes condiciones:',
    requirements: [
      'Mayor de edad.',
      'Sin distinción de género.',
      'Valores éticos y proactividad.',
      'Buena presencia.',
      'Educación media básica completa, incompleta o en curso, sujeta al cumplimiento de los requisitos, evaluaciones y capacitación establecidos para brindar un servicio de seguridad confiable y profesional.',
      'Debe trabajar de forma óptima y segura, sin riesgos para su salud ni la de los demás.',
      'Antecedentes penales (verificados).',
    ],
    attireTitle: 'Vestimenta del Personal',
    attireIntroBefore: 'Para brindar un servicio, ',
    attireIntroBrand: '“FUERZA ACTIVA DE ORIENTE”, C.A.',
    attireIntroAfter:
      ', proporciona equipo completo a sus elementos, este depende del lugar en donde se proporcione el servicio, y consta de lo siguiente:',
    shirt: 'Camisa azul rey',
    pants: 'Pantalón azul marino',
    cap: 'Gorra',
    dotacionNote:
      'Además de dotaciones y equipos de protección personal requeridos según el puesto de servicio.',
    digeservispAlt: 'Logo DIGESERVISP',
    digeservispTitle: 'Avalados por DIGESERVISP',
    digeservispBefore: 'Uniformes autorizados por ',
    digeservispOrg: 'DIGESERVISP',
    digeservispAfterOrg:
      ' (Dirección General de los Servicios de Vigilancia y Seguridad Privada), ente encargado de regular, fiscalizar, inspeccionar y controlar las empresas de vigilancia privada debidamente constituidas y autorizadas por el ',
    digeservispMinistry: 'MINISTERIO DEL PODER POPULAR PARA RELACIONES INTERIORES, JUSTICIA Y PAZ',
    digeservispEnd: '.',
  },
  en: {
    sectionAria: 'Personnel Selection Policy and Staff Attire',
    selectionTitle: 'Personnel Selection Policy',
    selectionIntro:
      'Through our Human Resources department, our company requires applicants for Security Officer positions to meet the following conditions:',
    requirements: [
      'Of legal age.',
      'No gender discrimination.',
      'Ethical values and proactivity.',
      'Neat appearance.',
      'Secondary education completed, incomplete, or in progress, subject to meeting established requirements, evaluations, and training to deliver reliable and professional security.',
      'Able to work safely and effectively without posing health risks to themselves or others.',
      'Criminal background check (verified).',
    ],
    attireTitle: 'Staff Attire',
    attireIntroBefore: 'To deliver our service, ',
    attireIntroBrand: '“FUERZA ACTIVA DE ORIENTE”, C.A.',
    attireIntroAfter:
      ' provides full equipment to personnel depending on the service location, consisting of:',
    shirt: 'Royal blue shirt',
    pants: 'Navy blue trousers',
    cap: 'Cap',
    dotacionNote:
      'In addition to uniforms and personal protective equipment required for each post.',
    digeservispAlt: 'DIGESERVISP Logo',
    digeservispTitle: 'Endorsed by DIGESERVISP',
    digeservispBefore: 'Uniforms authorized by ',
    digeservispOrg: 'DIGESERVISP',
    digeservispAfterOrg:
      ' (General Directorate of Guard and Private Security Services), the entity responsible for regulating, auditing, inspecting, and overseeing private security companies duly incorporated and authorized by the ',
    digeservispMinistry: 'MINISTRY OF POPULAR POWER FOR INTERNAL RELATIONS, JUSTICE AND PEACE',
    digeservispEnd: '.',
  },
};

export function StaffAttire() {
  const { lang } = useTranslation();
  const copy = STAFF_ATTIRE_COPY[lang] || STAFF_ATTIRE_COPY.es;

  return (
    <section className={styles.policySection} aria-label={copy.sectionAria}>
      <div className={styles.policyGrid}>
        {/* Columna 1: Política de Selección de Personal */}
        <article className={styles.mvvCard}>
          <h2 className={styles.mvvTitle}>{copy.selectionTitle}</h2>
          <div className={styles.mvvUnderline} aria-hidden="true" />
          <p className={styles.mvvText}>{copy.selectionIntro}</p>
          <ul className={styles.checkList}>
            {copy.requirements.map((requisito) => (
              <li key={requisito} className={styles.checkItem}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.checkIcon}
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{requisito}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Columna 2: Vestimenta del Personal */}
        <article className={styles.mvvCard}>
          <h2 className={styles.mvvTitle}>{copy.attireTitle}</h2>
          <div className={styles.mvvUnderline} aria-hidden="true" />
          <p className={styles.mvvText}>
            {copy.attireIntroBefore}
            <strong>{copy.attireIntroBrand}</strong>
            {copy.attireIntroAfter}
          </p>

          <ul className={styles.uniformList}>
            <li className={styles.uniformItem}>
              <span className={styles.garmentIconBox} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.garmentIcon}
                >
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
              </span>
              <span>
                <strong>{copy.shirt}</strong>
              </span>
            </li>

            <li className={styles.uniformItem}>
              <span className={styles.garmentIconBox} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.garmentIcon}
                >
                  <path d="M6 2h12l1 19h-5l-2-10-2 10H5L6 2z" />
                  <path d="M6 6h12" />
                </svg>
              </span>
              <span>
                <strong>{copy.pants}</strong>
              </span>
            </li>

            <li className={styles.uniformItem}>
              <span className={styles.garmentIconBox} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.garmentIcon}
                >
                  <path d="M4 14a8 8 0 0 1 16 0v2H4v-2z" />
                  <path d="M16 16h6a2 2 0 0 1-2 2H4" />
                </svg>
              </span>
              <span>
                <strong>{copy.cap}</strong>
              </span>
            </li>
          </ul>

          <p className={styles.dotacionNote}>{copy.dotacionNote}</p>
        </article>

        {/* Fila completa de punta a punta: Avalados por DIGESERVISP */}
        <div className={styles.digeservispBox}>
          <img
            src={digeservispLogo}
            alt={copy.digeservispAlt}
            className={styles.digeservispLogo}
          />
          <div>
            <h3 className={styles.digeservispTitle}>{copy.digeservispTitle}</h3>
            <p className={styles.digeservispText}>
              {copy.digeservispBefore}
              <strong>{copy.digeservispOrg}</strong>
              {copy.digeservispAfterOrg}
              <strong>{copy.digeservispMinistry}</strong>
              {copy.digeservispEnd}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}