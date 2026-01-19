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
              className="btn-cta text-center text-lg mb-6"
            >
              ¡INSCRIBIRME AHORA!
            </a>

            {/* Post-purchase Info Box */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 sm:p-8 text-left mb-6">
              <h4 className="text-accent font-bold text-lg sm:text-xl mb-4 uppercase tracking-wide">
                Tu camino hacia la abundancia empieza aquí...
              </h4>
              <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Al realizar tu pago, el sistema te redirigirá automáticamente. Para asegurar que recibas todo el acompañamiento que prometí, te pido que:
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-0.5 flex items-center justify-center text-xs text-primary font-bold">1</div>
                  <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                    <strong className="text-accent block text-lg mb-1">Nos escribas al WhatsApp:</strong> Envíanos una foto de tu pago. Esto nos permite conocerte de inmediato y asegurar tu espacio en la agenda de asesorías personalizadas.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-0.5 flex items-center justify-center text-xs text-primary font-bold">2</div>
                  <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                    <strong className="text-accent block text-lg mb-1">Te sumes al grupo de estudio:</strong> Es el lugar donde "afilaremos el hacha" juntos.
                  </p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-0.5 flex items-center justify-center text-xs text-primary font-bold">3</div>
                  <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                    <strong className="text-accent block text-lg mb-1">Únete al Grupo de WhatsApp:</strong> Allí recibirás el enlace de Zoom y las instrucciones finales para que no te pierdas ni un minuto del taller.
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-center text-xs text-primary-foreground/50 italic">
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
