import { useState } from 'react';
import anotando1 from '../../assets/anotando1.jpg';
import styles from '../../views/ServiciosView.module.css';
import { useTranslation } from '../../context/LanguageContext';

const ADVISORY_COPY = {
  es: {
    sectionAria: 'Asesoría en seguridad',
    eyebrow: 'Asesoría en seguridad',
    title: 'Análisis de vulnerabilidad y evaluación de riesgos',
    lead: 'Diagnóstico en campo para empresas industriales, comerciales y de servicio, orientado a reducir riesgos operativos y respaldar la toma de decisiones.',
    imgAlt: 'Evaluación y registro operativo de Fuerza Activa de Oriente',
    ctaNote: 'Solicita un diagnóstico ajustado a tus instalaciones.',
    ctaBtn: 'Solicitar evaluación',
    questions: [
      {
        id: 'preocupacion',
        texto: '¿Te inquieta el nivel de protección actual de tu empresa?',
        icono: 'escudo',
      },
      {
        id: 'debilidades',
        texto: '¿Buscas ubicar fallas o zonas vulnerables para blindar mejor tu operación?',
        icono: 'lupa',
      },
      {
        id: 'mermas',
        texto: '¿Quieres prevenir pérdidas en tu empresa provocadas por hurto?',
        icono: 'alerta',
      },
    ],
    items: [
      {
        id: 'vulnerabilidad',
        label: 'Vulnerabilidades y diagnóstico',
        heading: 'Detecta brechas antes de que afecten tu operación',
        text: 'Evaluamos puntos críticos en instalaciones industriales, comerciales y de servicio para frenar hurtos, mermas en inventario o intentos de intrusión.',
        points: [
          'Identificación de puntos débiles y accesos vulnerables en tu negocio.',
          'Revisión física en áreas operativas y sectores perimetrales.',
          'Plan de acción práctico enfocado en proteger tu patrimonio.',
        ],
      },
      {
        id: 'inspeccion',
        label: 'Recorrido, observaciones y recomendaciones',
        heading: 'Estudio físico en sitio con seguimiento medible',
        text: 'Realizamos un recorrido a pie junto a un representante de la empresa para identificar riesgos y oportunidades de mejora. Al finalizar, compartimos verbalmente nuestras observaciones y recomendaciones, orientadas a fortalecer la seguridad y facilitar el seguimiento de las acciones correctivas.',
        points: [
          'Inspección guiada por sectores con cuestionario estructurado.',
          'Identificación de fortalezas, riesgos y aspectos por mejorar.',
          'Presentación verbal de recomendaciones prácticas y personalizadas aplicables a tu empresa.',
          'Orientación para implementar y dar seguimiento a las medidas correctivas.',
        ],
      },
      {
        id: 'riesgos',
        label: 'Evaluación de riesgos',
        heading: 'Análisis estadístico de tus brechas de seguridad',
        text: 'A partir del levantamiento en campo, medimos el nivel de exposición de tus instalaciones mediante un análisis estructurado.',
        points: [
          'Probabilidad de incidencia delictiva en tus sedes.',
          'Frecuencia estimada de eventos.',
          'Quiénes pueden aprovechar las brechas detectadas.',
          'Qué información o archivos se encuentran expuestos.',
        ],
      },
    ],
  },
  en: {
    sectionAria: 'Security advisory',
    eyebrow: 'security consulting',
    title: 'Vulnerability analysis and risk assessment',
    lead: 'On-site diagnostics for industrial, commercial, and service companies aimed at reducing operational risks and supporting decision-making.',
    imgAlt: 'Operational assessment and logging by Fuerza Activa de Oriente',
    ctaNote: 'Request an assessment tailored to your facilities.',
    ctaBtn: 'Request assessment',
    questions: [
      {
        id: 'preocupacion',
        texto: 'Are you concerned about your company’s current level of protection?',
        icono: 'escudo',
      },
      {
        id: 'debilidades',
        texto: 'Looking to pinpoint weaknesses or vulnerable zones to strengthen your operation?',
        icono: 'lupa',
      },
      {
        id: 'mermas',
        texto: 'Want to Prevent Theft-Related Losses at Your Business?',
        icono: 'alerta',
      },
    ],
    items: [
      {
        id: 'vulnerabilidad',
        label: 'Vulnerabilities and diagnostics',
        heading: 'Detect gaps before they disrupt your operation',
        text: 'We assess critical points across industrial, commercial, and service facilities to curb theft, inventory shrinkage, and intrusion attempts.',
        points: [
          'Identification of weak points and vulnerable access areas in your business.',
          'Physical inspection of operational areas and perimeter sectors.',
          'Practical action plan focused on protecting your assets.',
        ],
      },
      {
        id: 'inspeccion',
        label: 'Walkthrough, observations and recommendations',
        heading: 'On-site physical review with measurable follow-up',
        text: 'We conduct an on-foot walkthrough alongside a company representative to identify risks and improvement opportunities. Afterward, we present our observations and recommendations to strengthen security and guide corrective follow-up.',
        points: [
          'Guided sector-by-sector inspection with a structured checklist.',
          'Identification of strengths, risks, and areas for improvement.',
          'Verbal presentation of practical, tailored recommendations for your company.',
          'Guidance to implement and track corrective measures.',
        ],
      },
      {
        id: 'riesgos',
        label: 'Risk assessment',
        heading: 'Structured analysis of your security gaps',
        text: 'Based on our field survey, we measure your facilities’ exposure level through a structured evaluation.',
        points: [
          'Likelihood of criminal incidents at your sites.',
          'Estimated frequency of events.',
          'Who could exploit the detected gaps.',
          'What information or records are exposed.',
        ],
      },
    ],
  },
};

function IconoPregunta({ tipo }) {
  if (tipo === 'escudo') {
    return (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  if (tipo === 'lupa') {
    return (
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
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    );
  }

  return (
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
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function Advisory({ onNavigate }) {
  const { lang } = useTranslation();
  const copy = ADVISORY_COPY[lang] || ADVISORY_COPY.es;
  const [openId, setOpenId] = useState('vulnerabilidad');

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const goTo = (e, vista, sectionId = null) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(vista, sectionId);
  };

  return (
    <section
      id="servicio-asesoria"
      className={styles.asesoriaSection}
      aria-label={copy.sectionAria}
    >
      <div className={styles.asesoriaCard}>
        <div className={styles.asesoriaTop}>
          <div>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.lead}>{copy.lead}</p>

            <ul className={styles.preguntasGrid}>
              {copy.questions.map((item) => (
                <li key={item.id} className={styles.preguntaItem}>
                  <span className={styles.preguntaIcono}>
                    <IconoPregunta tipo={item.icono} />
                  </span>
                  <span className={styles.preguntaTexto}>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.panelGrid}>
          {/* Izquierda: Imagen completa anotando1.jpg sin bordes */}
          <div className={styles.visualBox}>
            <img
              src={anotando1}
              alt={copy.imgAlt}
              className={styles.visualImg}
            />
          </div>

          {/* Derecha: Lista plegable + texto centrado y botón debajo */}
          <div className={styles.rightCol}>
            <div className={styles.accordionList}>
              {copy.items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className={styles.accordionTrigger}
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className={styles.accordionTitle}>{item.label}</span>
                      <span className={styles.accordionIcon} aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className={styles.accordionBody}>
                        <h3 className={styles.panelHeading}>{item.heading}</h3>
                        <p className={styles.panelText}>{item.text}</p>
                        <ul className={styles.checkList}>
                          {item.points.map((point) => (
                            <li key={point} className={styles.checkItem}>
                              <span className={styles.checkMark} aria-hidden="true">✓</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
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
        </div>
      </div>
    </section>
  );
}