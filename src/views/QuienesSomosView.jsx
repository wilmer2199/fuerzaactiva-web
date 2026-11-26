import { QuieneSomosFooter } from '../components/layout/QuieneSomoFooter.jsx';
import { AboutUs } from '../components/about/AboutUs.jsx';
import {MissionVisionValues} from '../components/about/MissionVisionValues.jsx'
import { SolvencyLegality } from '../components/about/SolvencyLegality.jsx';
import { StaffAttire } from '../components/about/StaffAttire.jsx';


export function QuienesSomosView( { onNavigate }) {
  return (
    <>
    {/* quienes somos */}  
    <AboutUs onNavigate={onNavigate}/>

    {/* 3 columnas: Misión, Visión y Nuestros valores */}
    <MissionVisionValues onNavigate={onNavigate}/>

    {/*  Solvencia y Legalidad */}
    <SolvencyLegality onNavigate={onNavigate}/>

    {/*  Política de Selección de Personal y Vestimenta del Personal */}
    <StaffAttire onNavigate={onNavigate}/>

    {/* Cierre  usando las clases de BodyFooterSection.module.css */}
    <QuieneSomosFooter onNavigate={(vista, sectionId) => {
        if (typeof onNavigate === 'function') {
          onNavigate(vista, sectionId);
        }
      }} />
    </>
  );
}