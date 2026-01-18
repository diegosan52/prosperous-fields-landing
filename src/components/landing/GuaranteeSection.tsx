import { Shield } from "lucide-react";
import wilsonGuarantee from "@/assets/wilson-guarantee.jpg";

const GuaranteeSection = () => {
  return (
    <section className="pb-16 lg:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="card-elevated p-8 sm:p-12 border border-border">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Icon/Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full transform rotate-6"></div>
                <div className="relative bg-accent/10 p-6 rounded-full">
                  <Shield className="w-16 h-16 text-accent" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground font-display">
                Garantía Incondicional de 7 Días
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Inscríbete hoy, asiste a la primera clase y si sientes que este taller no es para ti, te devolvemos el 100% de tu dinero sin preguntas.{" "}
                <strong className="text-primary">El riesgo es todo mío.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
