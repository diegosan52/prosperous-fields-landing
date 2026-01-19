import { Check } from "lucide-react";

const PURCHASE_LINK = "https://pay.hotmart.com/L103449630Q";

const PricingSection = () => {
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

  const benefits = [
    { text: "3 Sesiones en vivo por Zoom", highlight: false },
    { text: "Acceso a grabaciones por 1 año", highlight: false },
    { text: "Plantillas y Guías PDF descargables", highlight: false },
    { text: "BONO: Asesoría 1:1 (45 min) *", highlight: true }
  ];

  return (
    <section id="precio" className="section-padding">
      <div className="max-w-4xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-hero">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Pricing */}
          <div className="p-8 sm:p-10 lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-foreground font-display">
              Inversión Especial para Gente del Campo
            </h2>

            <div className="mb-8">
              <span className="text-primary-foreground/50 line-through text-2xl">$37 USD</span>
              <div className="text-5xl sm:text-6xl font-black text-accent">$17 USD</div>
              <p className="text-sm mt-2 text-primary-foreground/70">Un único pago por acceso total.</p>
            </div>

            <a
              href={PURCHASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="btn-cta text-center text-lg"
            >
              ASEGURAR MI CUPO AHORA
            </a>

            <p className="text-center text-xs text-primary-foreground/50 mt-4 italic">
              Pago seguro a través de Hotmart
            </p>
          </div>

          {/* Right: Benefits */}
          <div className="bg-primary-foreground/5 p-8 sm:p-10 lg:w-1/2 border-t lg:border-t-0 lg:border-l border-primary-foreground/10">
            <h3 className="text-xl font-bold mb-6 text-primary-foreground font-display">
              ¿Qué incluye tu inscripción?
            </h3>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 ${benefit.highlight ? 'text-accent font-bold' : 'text-primary-foreground'
                    }`}
                >
                  <span className="bg-accent p-1 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </span>
                  {benefit.text}
                </li>
              ))}
            </ul>

            <p className="text-xs text-primary-foreground/50 mt-6">
              * La asesoría 1:1 está sujeta a disponibilidad. Regístrate hoy para garantizar tu espacio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
