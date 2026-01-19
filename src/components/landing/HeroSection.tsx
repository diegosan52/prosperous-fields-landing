import wilson1 from "@/assets/wilson-1.png";

const PURCHASE_LINK = "https://pay.hotmart.com/L103449630Q";

const HeroSection = () => {
  const handleCtaClick = () => {
    // Track conversion event
    if (typeof window !== 'undefined') {
      // Meta Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout');
      }
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'begin_checkout', {
          currency: 'USD',
          value: 17
        });
      }
    }
  };

  return (
    <header className="relative bg-primary py-12 lg:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          alt="Campo colombiano"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
            Taller Online en Vivo
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-primary-foreground font-extrabold mb-6 leading-tight font-display text-balance">
            Deja de sobrevivir en el campo y empieza a{" "}
            <span className="text-accent">prosperar con propósito</span>
          </h1>

          <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aprende el método de cierre, planificación y autoliderazgo diseñado para transformar tu 2026 con propósito, claridad y un sistema que sí se sostiene en el tiempo.
          </p>
        </div>

        {/* Video + Wilson Image Layout */}
        <div className="grid lg:grid-cols-3 gap-6 items-center mb-10">
          {/* Video */}
          <div className="lg:col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-hero border-4 border-primary-foreground/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/a8jW3DfaFn8?rel=0"
              title="Presentación Taller Wilson Alzate"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Wilson Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3"></div>
              <img
                src={wilson1}
                alt="Wilson Alzate - Mentor de finanzas agropecuarias"
                className="relative rounded-2xl shadow-lg object-cover w-full aspect-[3/4]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <a
            href={PURCHASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="btn-cta text-xl px-10 py-5 mb-8"
          >
            ¡INSCRIBIRME AHORA POR SOLO $17 USD!
          </a>

          {/* Post-purchase Info Box */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 sm:p-8 text-left shadow-lg backdrop-blur-sm">
            <h4 className="text-accent font-bold text-lg sm:text-xl mb-4 uppercase tracking-wide">
              Tu camino hacia la abundancia empieza aquí...
            </h4>
            <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-6">
              Al realizar tu pago, el sistema te redirigirá automáticamente. Para asegurar que recibas todo el acompañamiento que prometí, te pido que:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-4 bg-primary/20 rounded-lg border border-accent/10">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-sm text-primary font-bold">1</div>
                <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                  <strong className="text-accent block text-lg mb-1">Escríbenos al WhatsApp:</strong> Envíanos tu comprobante para asegurar tu sesión de mentoría 1:1 de inmediato.
                </p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-primary/20 rounded-lg border border-accent/10">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-sm text-primary font-bold">2</div>
                <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                  <strong className="text-accent block text-lg mb-1">Súmate al grupo de estudio:</strong> Donde compartiremos materiales exclusivos antes del taller.
                </p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-primary/20 rounded-lg border border-accent/10">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-sm text-primary font-bold">3</div>
                <p className="text-primary-foreground/90 text-base sm:text-lg leading-snug">
                  <strong className="text-accent block text-lg mb-1">Únete al Grupo VIP de WhatsApp:</strong> Allí recibirás el link de Zoom para las sesiones en vivo.
                </p>
              </div>
            </div>
          </div>

          <p className="text-primary-foreground/60 mt-6 text-sm">
            Cupos limitados para la sesión de mentoría 1:1
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
