import styles from './AboutTrayectoria.module.css';
import imgOperacion1 from '../../assets/imgOperacion1.jpg';
import imgOperacion2 from '../../assets/imgOperacion2.jpg';
import { useTranslation } from '../../context/LanguageContext.jsx';

const ABOUT_TRAYECTORIA_COPY = {
  es: {
    title: 'Respaldo, orden y confianza',
    img1Alt: 'Supervisión y presencia de Fuerza Activa',
    img2Alt: 'Operaciones de seguridad industrial y comercial',
    copy1Before: 'Proteger lo que tanto esfuerzo ha costado exige disciplina, criterio y presencia constante. En ',
    copy1Brand: 'Fuerza Activa',
    copy1Middle: ' acumulamos ',
    copy1Years: 'más de 15 años en el mercado de seguridad',
    copy1After: ' resguardando plantas, comercios y sedes operativas con protocolos claros y respuesta oportuna.',
    copy2:
      'La cercanía con cada cliente y la seriedad en cada turno nos han permitido construir relaciones duraderas basadas en resultados reales y prevención efectiva.',
    yearsTop: 'TRAYECTORIA',
    yearsNumber: '15 AÑOS +',
    yearsCaption:
      'Durante mucho tiempo, hemos cuidado la seguridad y el bienestar de nuestros clientes los 365 días del año con operación continua, supervisión en sitio y protocolos adaptados a cada instalación industrial o comercial.',
    knowMoreBtn: 'CONÓCENOS',
  },
  en: {
    title: 'Backing, order and trust',
    img1Alt: 'Fuerza Activa supervision and on-site presence',
    img2Alt: 'Industrial and commercial security operations',
    copy1Before: 'Protecting what took so much effort to build requires discipline, sound judgment, and constant presence. At ',
    copy1Brand: 'Fuerza Activa',
    copy1Middle: ', we bring ',
    copy1Years: 'over 15 years in the security market',
    copy1After: ' safeguarding plants, retail spaces, and operational facilities with clear protocols and timely response.',
    copy2:
      'Close collaboration with every client and reliability on every shift have allowed us to build lasting relationships based on real results and effective prevention.',
    yearsTop: 'TRACK RECORD',
    yearsNumber: '15 YEARS +',
    yearsCaption:
      'For over a decade and a half, we have safeguarded our clients’ security and peace of mind 365 days a year with continuous operations, on-site supervision, and protocols tailored to each industrial or commercial facility.',
    knowMoreBtn: 'ABOUT US',
  },
};

export function AboutTrayectoria({ onNavigate }) {
  const { lang } = useTranslation();
  const copy = ABOUT_TRAYECTORIA_COPY[lang] || ABOUT_TRAYECTORIA_COPY.es;

  const handleConocenos = (e) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate('quienes-somos');
  };

  return (
    <section id="quienes-somos" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          {/* Columna 1: Título y primera fotografía */}
          <div className={styles.columnStack}>
            <div>
              <h2 className={styles.aboutTitle}>{copy.title}</h2>
            </div>
            <div className={styles.accentLine} aria-hidden="true" />
            <div className={styles.photoFrame}>
              <img src={imgOperacion1} alt={copy.img1Alt} />
            </div>
          </div>

          {/* Columna 2: Segunda fotografía y párrafo de 15 años */}
          <div className={styles.columnStack}>
            <div className={styles.photoFrame}>
              <img src={imgOperacion2} alt={copy.img2Alt} />
            </div>
            <p className={styles.aboutCopy}>
              {copy.copy1Before}
              <strong>{copy.copy1Brand}</strong>
              {copy.copy1Middle}
              <strong>{copy.copy1Years}</strong>
              {copy.copy1After}
            </p>
          </div>

          {/* Columna 3: Compromiso, insignia de 15 años y botón */}
          <div className={styles.columnStack}>
            <p className={styles.aboutCopy}>{copy.copy2}</p>

            <div className={styles.yearsBox}>
              <div className={styles.yearsBadge}>
                <span className={styles.yearsTop}>{copy.yearsTop}</span>
                <span className={styles.yearsNumber}>{copy.yearsNumber}</span>
              </div>

              <p className={styles.yearsCaption}>{copy.yearsCaption}</p>

              <a href="#quienes-somos" className={styles.knowMoreBtn} onClick={handleConocenos}>
                {copy.knowMoreBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}