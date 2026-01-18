import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=3147710062&text=Hola%20Wilson%20quiero%20inscribirme";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Contact');
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'contact', {
          method: 'whatsapp'
        });
      }
    }
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Inscríbete ahora!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
