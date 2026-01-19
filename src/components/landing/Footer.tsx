import { Instagram, Facebook, Youtube } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=3147710062&text=Hola%20Wilson%20quiero%20inscribirme";

// TikTok icon (not available in lucide-react)
const TikTokIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const Footer = () => {
  const handleCtaClick = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout');
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'begin_checkout', {
          currency: 'USD',
          value: 17
        });
      }
    }
  };

  // Social links updated
  const socialLinks = {
    instagram: "https://www.instagram.com/walzategomez/",
    facebook: "https://www.facebook.com/wilsonalzateagro?rdid=ef2hTj8ugsWuiX5B#",
    youtube: "https://www.youtube.com/@walzategomez",
    tiktok: "https://www.tiktok.com/@walzategomez?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnF_Bo_t_6vMq1JlBnt0pMD_esqLW6XU4F4x7VHU0eVnfKtV61COmmt6CnbaM_aem_Hxa2Wj7w0Rs81-KGHfLo0A"
  };

  return (
    <footer className="bg-primary py-16 lg:py-20 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 italic text-primary-foreground font-display text-balance">
          "El suelo está listo. ¿Estás listo para sembrar con propósito?"
        </h2>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="btn-cta text-xl sm:text-2xl px-8 sm:px-12 py-5 sm:py-6 font-black mb-10"
        >
          SÍ, QUIERO MI PLAN 2026 POR $17 USD
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            aria-label="Instagram de Wilson Alzate"
          >
            <Instagram className="w-5 h-5 text-primary-foreground" />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            aria-label="Facebook de Wilson Alzate"
          >
            <Facebook className="w-5 h-5 text-primary-foreground" />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            aria-label="YouTube de Wilson Alzate"
          >
            <Youtube className="w-5 h-5 text-primary-foreground" />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            aria-label="TikTok de Wilson Alzate"
          >
            <TikTokIcon />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-primary-foreground/50 text-sm space-y-1">
          <p>© 2026 Wilson Alzate - Finanzas y Desarrollo Personal para el Agro.</p>
          <p>Medellín, Colombia</p>
          <p className="mt-4 text-primary-foreground/40">
            Desarrollado por{' '}
            <a
              href="https://dmentedigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/60 transition-colors underline"
            >
              Dmente Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
