import styles from './Footer.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx'; 


// json para la traduccion 
const FOOTER_COPY = {
  es: {
    rights: 'Todos los derechos reservados.',
    developedBy: 'Desarrollado por',
    waMessage:
      'Hola Ing. Wilmer Pérez, vi la página web de Fuerza Activa de Oriente y me gustaría consultarte por un desarrollo web.',
  },
  en: {
    rights: 'All rights reserved.',
    developedBy: 'Developed by',
    waMessage:
      'Hello Ing. Wilmer Pérez, I saw the Fuerza Activa de Oriente website and would like to ask about web development.',
  },
};

export function Footer() {
  const { lang } = useTranslation();
  const copy = FOOTER_COPY[lang] || FOOTER_COPY.es;

  const whatsappUrl = `https://wa.me/584149513574?text=${encodeURIComponent(
    copy.waMessage
  )}`;

  return (
    <footer className={styles.footer}>
      <small className={styles.copy}>
        &copy; {new Date().getFullYear()} FUERZA ACTIVA DE ORIENTE, C.A. —{' '}
        {copy.rights} {copy.developedBy}{' '}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.devLink}
        >
          Ing. Wilmer Perez
        </a>
        .
      </small>
    </footer>
  );
}

{/*export function Footer() {

    return (

        <footer>
           <small>&copy; {new Date().getFullYear()} FUERZA ACTIVA DE ORIENTE, C.A. — Todos los derechos reservados.
Desarrollado por Ing. Wilmer Perez. </small>
        </footer>
    )

}
    */}




