import { ContactanosViewFooter } from '../components/layout/ContactanosViewFooter.jsx';
import { HeaderContact } from '../components/contact/headerContact.jsx'
import { Maps } from '../../src/components/contact/maps.jsx';
import { Message } from '../components/contact/message.jsx';


export function ContactanosView({ onNavigate }) {

  return (
    <>

        {/* seccion header */}
        <HeaderContact/>

        {/* Sección 2: Google Maps interactivo y botón "Cómo llegar" */}
          <Maps/>

        {/* Sección 3: Formulario de contacto enviado por WhatsApp */}
        <Message/>
      

      <ContactanosViewFooter onNavigate={onNavigate} />
    </>
  );
}