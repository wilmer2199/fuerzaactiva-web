import { ServiciosViewFooter } from '../components/layout/ServiciosViewFooter.jsx';
import { HeaderSection } from '../components/services/headerSection.jsx';
import { Advisory } from '../components/services/Advisory.jsx';
import { Guard } from '../components/services/Guard.jsx';



export function ServiciosView({ onNavigate }) {
  
  return (
    <>
      {/* seccion de cabecera */}
      <HeaderSection/>

      {/*seccion de asesoria */}
      <Advisory onNavigate={onNavigate} />
      
      {/* seccion de vigilancia */}
      <Guard onNavigate={onNavigate} />
      

      {/* footer con las clases de BodyFooterSection.module.css */}
            <ServiciosViewFooter onNavigate={(vista, sectionId) => {
                if (typeof onNavigate === 'function') {
                  onNavigate(vista, sectionId);
                }
        }} />
      
            
    </>
  );
}