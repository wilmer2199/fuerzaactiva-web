import styles from '../../views/QuienesSomosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

//traduccion con json
const MVV_COPY = {
  es: {
    sectionAria: 'Misión, Visión y Nuestros valores',
    items: [
      {
        id: 'mission',
        title: 'Misión',
        text: 'Satisfacer las necesidades de nuestros aliados comerciales, mediante la prestación de servicios de vigilancia y seguridad privada de manera eficaz, basado en la selección y suministro de personal idóneo para cubrir las necesidades prioritarias en el campo de la seguridad, orientado a procesos de mejoramiento continuo, que generan confianza y tranquilidad.',
      },
      {
        id: 'vision',
        title: 'Visión',
        text: 'Se proyecta como una empresa de excelente organización empresarial, líder, de trayectoria y cubrimiento en el sector de vigilancia y seguridad privada aplicando la eficiencia en el servicio garantizando de esta manera ser identificados como símbolo de excelencia y calidad.',
      },
      {
        id: 'values',
        title: 'Nuestros valores',
        text: 'Impulsa su desarrollo y nutre su fortaleza en la práctica de sus valores: responsabilidad, respeto, honestidad, disciplina y servicio al prójimo.',
      },
    ],
  },
  en: {
    sectionAria: 'Mission, Vision, and Our Values',
    items: [
      {
        id: 'mission',
        title: 'Mission',
        text: 'To meet our business partners’ needs by delivering effective guard and private security services, grounded in selecting and supplying qualified personnel to cover priority security requirements, driven by continuous improvement processes that build trust and peace of mind.',
      },
      {
        id: 'vision',
        title: 'Vision',
        text: 'To be recognized as a well-organized, leading company with strong track record and coverage in the guard and private security sector, applying service efficiency to stand out as a symbol of excellence and quality.',
      },
      {
        id: 'values',
        title: 'Our Values',
        text: 'To drive growth and strengthen our organization through responsibility, respect, honesty, discipline, and service to others.',
      },
    ],
  },
};

export function MissionVisionValues() {
  const { lang } = useTranslation();
  const copy = MVV_COPY[lang] || MVV_COPY.es;

  return (
    <section className={styles.mvvSection} aria-label={copy.sectionAria}>
      {copy.items.map((item) => (
        <article key={item.id} className={styles.mvvRowCard}>
          <div className={styles.mvvHeaderCol}>
            <h2 className={styles.mvvTitle}>{item.title}</h2>
            <div className={styles.mvvUnderline} aria-hidden="true" />
          </div>
          <p className={styles.mvvText}>{item.text}</p>
        </article>
      ))}
    </section>
  );
}