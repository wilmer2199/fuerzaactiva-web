import styles from './Header.module.css';
import escudoFuerzaActiva from '../../assets/fasn.png';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useTranslation } from '../../context/LanguageContext';


export function Header({ onNavigate, activeView = 'inicio' }) {
const { t } = useTranslation();

  const handleNav = (e, vista, sectionId = null) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(vista, sectionId);
  };

  return (
    <header className={`${styles.siteHeader} ${activeView === 'quienes-somos' ? styles.siteHeaderTransparent : ''}`}>
      <div className={styles.headerInner}>
        <a
          href="#inicio"
          className={styles.brandLink}
          onClick={(e) => handleNav(e, 'inicio')}
        >
          <img
            src={escudoFuerzaActiva}
            alt="Escudo Fuerza Activa"
            className={styles.logoImg}
          />
          <span className={styles.brandText}>Fuerza Activa</span>
        </a>

        <nav className={styles.navMenu} aria-label="Navegación principal">
          <a
            href="#quienes-somos"
            className={styles.navLink}
            onClick={(e) => handleNav(e, 'quienes-somos')}
          >
            {/*¿quiénes somos? */}  {t('nav.about')}
          </a>

          <a
            href="#servicios"
            className={styles.navLink}
            onClick={(e) => handleNav(e, 'servicios')}
          >
            {/*servicios */} {t('nav.services')}
          </a>

          <a
            href="#contactanos"
            className={styles.contactCta}
            onClick={(e) => handleNav(e, 'contactanos')}
          >
            {/*contáctanos*/} {t('nav.contact')}
          </a>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}