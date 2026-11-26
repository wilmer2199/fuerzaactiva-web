import styles from './Benefits.module.css';
import { useTranslation } from '../../context/LanguageContext';

const BENEFITS_COPY = {
  es: {
    mainTitlePrefix: '¿POR QUÉ ELEGIR A',
    mainTitleBrand: 'FUERZA ACTIVA',
    headerTitle: 'Ventajas de contar con nuestra seguridad',
    headerSubtitle:
      'Además de nuestros servicios de vigilancia, te ofrecemos una serie de ventajas estratégicas diseñadas para garantizar la tranquilidad absoluta de tu empresa.',
    items: [
      {
        id: 'experiencia',
        title: 'Experiencia comprobada',
        desc: 'Con una trayectoria sólida hemos demostrado nuestra capacidad para brindar soluciones de seguridad industrial y comercial altamente efectivas y confiables.',
      },
      {
        id: 'capacitacion',
        title: 'Personal altamente capacitado',
        desc: 'Nuestros oficiales de seguridad y supervisores reciben una formación rigurosa y continua, garantizando profesionalismo, control de acceso y respuesta rápida.',
      },
      {
        id: 'perimetral',
        title: 'Estudio y asesoría perimetral',
        desc: 'Analizamos minuciosamente tus instalaciones para identificar puntos vulnerables y diseñar un plan de seguridad adaptado a tus riesgos.',
      },
      {
        id: 'enfoque',
        title: 'Enfoque personalizado',
        desc: 'Nos adaptamos a las necesidades específicas de tu entorno corporativo o comercial, diseñando esquemas de vigilancia a la medida de tus operaciones.',
      },
      {
        id: 'monitoreo',
        title: 'Monitoreo continuo',
        desc: 'Supervisión constante para optimizar los niveles de protección integral 24/7.',
      },
      {
        id: 'atencion',
        title: 'Atención al cliente',
        desc: 'La satisfacción y comunicación constante con nuestros clientes es una prioridad; estamos siempre disponibles para atender tus requerimientos y consultas con total inmediatez.',
      },
    ],
  },
  en: {
    mainTitlePrefix: 'WHY CHOOSE',
    mainTitleBrand: 'FUERZA ACTIVA',
    headerTitle: 'Advantages of having our security',
    headerSubtitle:
      'In addition to our guard services, we offer strategic advantages designed to ensure complete peace of mind for your company.',
    items: [
      {
        id: 'experiencia',
        title: 'Proven experience',
        desc: 'With a solid track record, we have demonstrated our ability to deliver highly effective and reliable industrial and commercial security solutions.',
      },
      {
        id: 'capacitacion',
        title: 'Highly trained personnel',
        desc: 'Our security officers and supervisors receive rigorous and ongoing training, ensuring professionalism, access control, and rapid response.',
      },
      {
        id: 'perimetral',
        title: 'Perimeter study and advisory',
        desc: 'We thoroughly analyze your facilities to identify vulnerabilities and design a security plan tailored to your risks.',
      },
      {
        id: 'enfoque',
        title: 'Personalized approach',
        desc: 'We adapt to the specific needs of your corporate or commercial environment, designing guard schemes tailored to your operations.',
      },
      {
        id: 'monitoreo',
        title: 'Continuous monitoring',
        desc: 'Constant supervision to optimize 24/7 comprehensive protection.',
      },
      {
        id: 'atencion',
        title: 'Customer service',
        desc: 'Client satisfaction and constant communication are a priority; we are always available to handle your requests and inquiries promptly.',
      },
    ],
  },
};

export function Benefits() {
  const { lang } = useTranslation();
  const copy = BENEFITS_COPY[lang] || BENEFITS_COPY.es;

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.benefitsTitle}>
        {copy.mainTitlePrefix} <strong>{copy.mainTitleBrand}</strong>?
      </h2>
      <div className={styles.benefitsContainer}>
        <header className={styles.benefitsHeader}>
          <h2>{copy.headerTitle}</h2>
          <div className={styles.titleUnderline} />
          <p>{copy.headerSubtitle}</p>
        </header>

        <div className={styles.benefitsGrid}>
          {copy.items.map((item, index) => (
            <article key={item.id} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                {index === 0 && (
                  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z" />
                  </svg>
                )}
                {index === 3 && (
                  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,88,88,0,0,1-88-88,8,8,0,0,1,16,0,72,72,0,0,0,72,72A8,8,0,0,1,144,176Z" />
                  </svg>
                )}
                {index === 4 && (
                  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.5,87.5,0,0,1,215.64,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z" />
                  </svg>
                )}
                {index === 5 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
                    <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M19.001 15.5v1.5" />
                    <path d="M19.001 21v1.5" />
                    <path d="M22.032 17.25l-1.299 .75" />
                    <path d="M17.27 20l-1.3 .75" />
                    <path d="M15.97 17.25l1.3 .75" />
                    <path d="M20.733 20l1.3 .75" />
                  </svg>
                )}
              </div>
              <div className={styles.benefitContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}