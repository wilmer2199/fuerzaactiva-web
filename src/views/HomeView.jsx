import { AboutTrayectoria } from '../components/start/AboutTrayectoria.jsx';
import { ServicesAllySection } from '../components/start/ServicesAllySection.jsx';
import { WhySecuritySection } from '../components/start/WhySecuritySection.jsx';
import { BodyFooterSection } from '../components/layout/HomeViewFooterSection.jsx';
import {Benefits} from '../components/start/benefits.jsx';
import {useTranslation} from '../context/LanguageContext.jsx'

//json ccon traduccion en la pagina
const HERO_COPY = {
  es: {
    imgAlt: 'Fondo Seguridad',
    title: 'Seguridad privada a tu alcance',
    subtitle:
      'Somos el aliado estratégico que protege los activos de importantes compañías industriales y comerciales',
  },
  en: {
    imgAlt: 'Security background',
    title: 'Private Security Within Your Reach',
    subtitle:
      'We are the strategic partner protecting the assets of leading industrial and commercial companies',
  },
};

export function HomeView({ onNavigate }) {
  const { lang } = useTranslation();
  const hero = HERO_COPY[lang] || HERO_COPY.es;

    return (
        <>
            <main>
                {/* Hero Section (puedes mantenerlo en index.css o modularizarlo también) */}
                <section className="hero-section">
                    <img src="./src/assets/imgf1.jpg" alt="Fondo Seguridad" />
                    <h1>{hero.title}</h1>
                        <h2> {hero.subtitle}</h2>
                   
                </section>

                {/* sección de trayectoria css module  */}
                
                <section>
                    <AboutTrayectoria onNavigate={onNavigate} />
                </section> 

                <ServicesAllySection  onNavigate={onNavigate}/> 

                {/* Sección de Beneficios con CSS Module */}
                <Benefits/>
                
                <WhySecuritySection />
                
                
                <BodyFooterSection onNavigate={onNavigate} />

            </main>
        </>
    )
}