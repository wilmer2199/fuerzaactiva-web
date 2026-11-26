import { useEffect, useState } from 'react';
import styles from './WhatsappFloatButton.module.css';
import { useTranslation } from '../../context/LanguageContext.jsx';

const WHATSAPP_URL = 'https://wa.me/584149513574';
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
  WHATSAPP_URL
)}`;


const WHATSAPP_COPY = {
  es: {
    dialogAria: 'Chat de WhatsApp',
    closeAria: 'Cerrar ventana de chat',
    greeting: 'Hola',
    question: '¿En qué podemos ayudarte?',
    qrAlt: 'Código QR para chatear en WhatsApp con Fuerza Activa',
    qrCaption: 'Escanea el código',
    openChat: 'Abrir chat',
    floatAria: 'Abrir chat de WhatsApp de Fuerza Activa',
    floatTitle: 'WhatsApp Fuerza Activa',
  },
  en: {
    dialogAria: 'WhatsApp Chat',
    closeAria: 'Close chat window',
    greeting: 'Hello',
    question: 'How can we help you?',
    qrAlt: 'QR code to chat on WhatsApp with Fuerza Activa',
    qrCaption: 'Scan the code',
    openChat: 'Open chat',
    floatAria: 'Open Fuerza Activa WhatsApp chat',
    floatTitle: 'Fuerza Activa WhatsApp',
  },
};

export function WhatsappFloatButton() {
  const { lang } = useTranslation();
  const copy = WHATSAPP_COPY[lang] || WHATSAPP_COPY.es;

  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringOpen, setIsHoveringOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [badgeCycle, setBadgeCycle] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setShowBadge(false);
      return;
    }

    setShowBadge(false);

    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, badgeCycle]);

  const handleOpenChat = () => {
    setShowBadge(false);
    setIsOpen(true);
    setIsHoveringOpen(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setIsHoveringOpen(false);
    setBadgeCycle((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      {isOpen ? (
        <div className={styles.chatCard} role="dialog" aria-label="Chat de WhatsApp">
          <div className={styles.chatHeader}>
            <span className={styles.chatBrand}>
              <span className={styles.chatBrandDot} aria-hidden="true" />
              Fuerza Activa
            </span>
            <button
              type="button"
              onClick={handleCloseChat}
              aria-label="Cerrar ventana de chat"
              className={styles.closeBtn}
            >
              &times;
            </button>
          </div>

          <div className={styles.chatBody}>
            <div className={styles.messageBubble}>
              <p className={styles.messageGreeting}>&#128075; {/*Hola*/} {copy.greeting}</p>
              <p className={styles.messageQuestion}> {/*&iquest;En qu&eacute; podemos ayudarte?*/} {copy.question} </p>
            </div>

            <div className={styles.actionRow}>
              {isHoveringOpen && (
                <div className={styles.qrPopover} role="tooltip">
                  <img
                    src={QR_URL}
                    alt="Código QR para chatear en WhatsApp con Fuerza Activa"
                    className={styles.qrImage}
                  />
                  <p className={styles.qrCaption}>{/*Escanea el c&oacute;digo*/} {copy.qrCaption}</p>
                </div>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openChatBtn}
                onMouseEnter={() => setIsHoveringOpen(true)}
                onMouseLeave={() => setIsHoveringOpen(false)}
                onFocus={() => setIsHoveringOpen(true)}
                onBlur={() => setIsHoveringOpen(false)}
              >
                <span>{/*Abrir chat*/} {copy.openChat} </span>
                {isHoveringOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={styles.actionIcon}
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={styles.actionIcon}
                  >
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleOpenChat}
          aria-label={copy.floatAria} //"Ab rir chat de WhatsApp de Fuerza Activa"
          title={copy.floatTitle} //"WhatsApp Fuerza Activa"
          className={styles.whatsappFloat}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={styles.whatsappIcon}
          >
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>

          {showBadge && <span className={styles.badge}>1</span>}
        </button>
      )}
    </div>
  );
}