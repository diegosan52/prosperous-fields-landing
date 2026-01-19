import wilsonHero from "@/assets/wilson-hero.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=3147710062&text=Hola%20Wilson%20quiero%20inscribirme";

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
                src={wilsonHero}
                alt="Wilson Alzate - Mentor de finanzas agropecuarias"
                className="relative rounded-2xl shadow-lg object-cover w-full aspect-[3/4]"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="btn-cta text-xl px-10 py-5"
          >
            ¡QUIERO INSCRIBIRME POR SOLO $17 USD!
          </a>
          <p className="text-primary-foreground/60 mt-4 text-sm">
            Cupos limitados para la sesión de mentoría 1:1
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
