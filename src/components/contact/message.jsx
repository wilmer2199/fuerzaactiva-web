import { useState } from 'react';
import styles from '../../views/ContactanosView.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

const MESSAGE_COPY = {
  es: {
    sectionAria: 'Formulario de solicitud por WhatsApp',
    eyebrow: 'Solicitud directa',
    title: 'Completa la información para iniciar tu consulta',
    subtitle: '',
    nameLabel: 'Nombre completo *',
    namePlaceholder: 'Ej. Carlos Mendoza',
    emailLabel: 'Correo electrónico *',
    emailPlaceholder: 'correo@empresa.com',
    phoneLabel: 'Número de teléfono *',
    phonePlaceholder: '04140000000',
    companyLabel: 'Nombre de la empresa *',
    companyPlaceholder: 'Inversiones Oriente C.A.',
    locationLabel: 'Ubicación de la empresa *',
    locationPlaceholder: 'Ciudad, sector, avenida o punto de referencia',
    scheduleLabel: 'Horario de servicio *',
    scheduleAria: 'Horario de servicio',
    schedule12: '12 horas',
    schedule24: '24 horas',
    submitBtn: 'Enviar',
    waHeader: '*SOLICITUD DE SERVICIO DE SEGURIDAD*',
    waSubheader: '_Fuerza Activa de Oriente_',
    waName: 'Nombre',
    waEmail: 'Correo',
    waPhone: 'Teléfono',
    waCompany: 'Empresa',
    waLocation: 'Ubicación',
    waSchedule: 'Horario requerido',
    waFooter: '_Enviado desde la web de Fuerza Activa_',
  },
  en: {
    sectionAria: 'WhatsApp request form',
    eyebrow: 'Direct request',
    title: 'Fill out the details to start your inquiry',
    subtitle: '',
    nameLabel: 'Full name *',
    namePlaceholder: 'e.g. Carlos Mendoza',
    emailLabel: 'Email address *',
    emailPlaceholder: 'name@company.com',
    phoneLabel: 'Phone number *',
    phonePlaceholder: '04140000000',
    companyLabel: 'Company name *',
    companyPlaceholder: 'Inversiones Oriente C.A.',
    locationLabel: 'Company location *',
    locationPlaceholder: 'City, area, avenue, or landmark',
    scheduleLabel: 'Service schedule *',
    scheduleAria: 'Service schedule',
    schedule12: '12 hours',
    schedule24: '24 hours',
    submitBtn: 'Send',
    waHeader: '*SECURITY SERVICE REQUEST*',
    waSubheader: '_Fuerza Activa de Oriente_',
    waName: 'Name',
    waEmail: 'Email',
    waPhone: 'Phone',
    waCompany: 'Company',
    waLocation: 'Location',
    waSchedule: 'Requested schedule',
    waFooter: '_Sent from the Fuerza Activa website_',
  },
};

export function Message() {
  const { lang } = useTranslation();
  const copy = MESSAGE_COPY[lang] || MESSAGE_COPY.es;

  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [ubicacionEmpresa, setUbicacionEmpresa] = useState('');
  const [horarioServicio, setHorarioServicio] = useState('24 horas');

  const scheduleDisplay =
    horarioServicio === '12 horas' ? copy.schedule12 : copy.schedule24;

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const lineas = [
      copy.waHeader,
      copy.waSubheader,
      '────────────────────',
      '',
      nombreCompleto ? `*${copy.waName}:* ${nombreCompleto.trim()}` : '',
      correo ? `*${copy.waEmail}:* ${correo.trim()}` : '',
      telefono ? `*${copy.waPhone}:* ${telefono.trim()}` : '',
      empresa ? `*${copy.waCompany}:* ${empresa.trim()}` : '',
      ubicacionEmpresa ? `*${copy.waLocation}:* ${ubicacionEmpresa.trim()}` : '',
      `*${copy.waSchedule}:* ${scheduleDisplay}`,
      '',
      '────────────────────',
      copy.waFooter,
    ]
      .filter((linea) => linea !== null && linea !== undefined)
      .join('\n');

    const url = `https://wa.me/584149513574?text=${encodeURIComponent(lineas)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className={styles.pageContent}>
        <div className={styles.topActions} />

        <section className={styles.formSection} aria-label={copy.sectionAria}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{copy.title}</h2>
              {copy.subtitle && (
                <p className={styles.sectionSubtitle}>{copy.subtitle}</p>
              )}
            </div>

            <form className={styles.formGrid} onSubmit={handleWhatsAppSubmit}>
              <div className={styles.fieldGroup}>
                <label htmlFor="nombre-completo" className={styles.label}>
                  {copy.nameLabel}
                </label>
                <input
                  id="nombre-completo"
                  type="text"
                  className={styles.input}
                  placeholder={copy.namePlaceholder}
                  value={nombreCompleto}
                  onChange={(e) => setNombreCompleto(e.target.value)}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="correo-electronico" className={styles.label}>
                  {copy.emailLabel}
                </label>
                <input
                  id="correo-electronico"
                  type="email"
                  className={styles.input}
                  placeholder={copy.emailPlaceholder}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="numero-telefono" className={styles.label}>
                  {copy.phoneLabel}
                </label>
                <input
                  id="numero-telefono"
                  type="tel"
                  inputMode="numeric"
                  className={styles.input}
                  maxLength={11}
                  minLength={11}
                  pattern="0[0-9]{10}"
                  placeholder={copy.phonePlaceholder}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="nombre-empresa" className={styles.label}>
                  {copy.companyLabel}
                </label>
                <input
                  id="nombre-empresa"
                  type="text"
                  className={styles.input}
                  placeholder={copy.companyPlaceholder}
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                />
              </div>

              <div className={`${styles.fieldGroup} ${styles.fullSpan}`}>
                <label htmlFor="ubicacion-empresa" className={styles.label}>
                  {copy.locationLabel}
                </label>
                <input
                  id="ubicacion-empresa"
                  type="text"
                  className={styles.input}
                  placeholder={copy.locationPlaceholder}
                  value={ubicacionEmpresa}
                  onChange={(e) => setUbicacionEmpresa(e.target.value)}
                  required
                />
              </div>

              <div className={`${styles.fieldGroup} ${styles.fullSpan}`}>
                <span className={styles.label}>{copy.scheduleLabel}</span>
                <div
                  className={styles.radioGroup}
                  role="radiogroup"
                  aria-label={copy.scheduleAria}
                >
                  <label
                    className={`${styles.radioOption} ${
                      horarioServicio === '12 horas' ? styles.radioOptionActive : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="horarioServicio"
                      value="12 horas"
                      checked={horarioServicio === '12 horas'}
                      onChange={(e) => setHorarioServicio(e.target.value)}
                      required
                    />
                    <span>{copy.schedule12}</span>
                  </label>

                  <label
                    className={`${styles.radioOption} ${
                      horarioServicio === '24 horas' ? styles.radioOptionActive : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="horarioServicio"
                      value="24 horas"
                      checked={horarioServicio === '24 horas'}
                      onChange={(e) => setHorarioServicio(e.target.value)}
                    />
                    <span>{copy.schedule24}</span>
                  </label>
                </div>
              </div>

              <div className={`${styles.submitWrap} ${styles.fullSpan}`}>
                <button type="submit" className={styles.submitBtn}>
                  {copy.submitBtn}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}