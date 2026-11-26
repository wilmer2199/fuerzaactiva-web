import { useState } from 'react';
import styles from './WhySecuritySection.module.css';
import { useTranslation } from '../../context/LanguageContext';


// json para traducir
const WHY_SECURITY_COPY = {
  es: {
    title: '¿Por qué tener seguridad privada?',
    introText:
      'Contar con un respaldo profesional protege la continuidad de tus operaciones y previene riesgos antes de que ocurran. Estas son tres razones clave para confiar el resguardo de tu empresa a Fuerza Activa:',
    reasons: [
      {
        id: 'disuasion',
        title: 'Prevención de pérdidas y robos',
        description:
          'La presencia visible de oficiales capacitados y el control estricto de accesos reducen significativamente el riesgo de hurtos, intrusiones y daños materiales en tus instalaciones.',
      },
      {
        id: 'entorno-seguro',
        title: 'Resguardo para tus empleados y visitantes',
        description:
          'Creamos un ambiente ordenado y confiable para colaboradores, proveedores y clientes, asegurando que cada jornada operativa se desarrolle con total normalidad.',
      },
      {
        id: 'accion-inmediata',
        title: 'Actuación rápida ante emergencias',
        description:
          'Nuestro personal sigue protocolos claros de reacción y comunicación directa con supervisión para contener cualquier novedad antes de que afecte tus operaciones.',
      },
    ],
  },
  en: {
    title: 'Why have private security?',
    introText:
      'Having professional backing protects business continuity and prevents risks before they happen. Here are three key reasons to trust your company’s protection to Fuerza Activa:',
    reasons: [
      {
        id: 'disuasion',
        title: 'Prevention of losses and theft',
        description:
          'The visible presence of trained officers and strict access control significantly reduce the risk of theft, intrusions, and property damage at your facilities.',
      },
      {
        id: 'entorno-seguro',
        title: 'Protection for Your Employees and Visitors',
        description:
          'We create an orderly and reliable environment for employees, suppliers, and clients, ensuring each workday runs smoothly.',
      },
      {
        id: 'accion-inmediata',
        title: 'Rapid Emergency Response',
        description:
          'Our staff follows clear response protocols and direct communication with supervision to contain any incident before it affects your operations.',
      },
    ],
  },
};

export function WhySecuritySection() {
  const { lang } = useTranslation();
  const copy = WHY_SECURITY_COPY[lang] || WHY_SECURITY_COPY.es;
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="por-que-seguridad" className={styles.whySection}>
      <div className={styles.container}>
        {/* Columna izquierda */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>{copy.title}</h2>
          <div className={styles.underline} aria-hidden="true" />
          <p className={styles.introText}>{copy.introText}</p>
        </div>

        {/* Columna derecha: 3 puntos interactivos */}
        <div className={styles.accordionList}>
          {copy.reasons.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionTrigger}
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                >
                  <svg
                    className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 3l6 5-6 5V3z" />
                  </svg>
                  <span className={styles.itemTitle}>{item.title}</span>
                </button>

                {isOpen && (
                  <div className={styles.accordionPanel}>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}