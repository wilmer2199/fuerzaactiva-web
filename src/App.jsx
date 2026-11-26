
import { useState } from 'react';
import { Header } from './components/layout/header.jsx';
import { HomeView } from './views/HomeView.jsx';
import { Footer } from './components/layout/footer.jsx';
import { QuienesSomosView } from './views/QuienesSomosView.jsx';
import { ServiciosView } from './views/ServiciosView.jsx';
import { ContactanosView } from './views/ContactanosView.jsx';
import { WhatsappFloatButton } from './components/common/WhatsappFloatButton.jsx';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [vista, setVista] = useState('inicio');

  const navegarA = (nuevaVista, sectionId = null) => {
    setVista(nuevaVista);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <Header activeView={vista} onNavigate={navegarA} />
      {vista === 'inicio' && <HomeView onNavigate={navegarA} />}
      {vista === 'quienes-somos' && <QuienesSomosView onNavigate={navegarA} />}
      {vista === 'servicios' && <ServiciosView onNavigate={navegarA} />}
      {vista === 'contactanos' && <ContactanosView onNavigate={navegarA} />}

      <Footer onNavigate={navegarA} />
      <WhatsappFloatButton />
    </LanguageProvider>
  );
}

export default App;

