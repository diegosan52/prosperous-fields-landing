import wilson2 from "@/assets/wilson-2.jpg";

const StorySection = () => {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary font-display">
          "¿Tiene que ser el campo sinónimo de sacrificio?"
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 items-center">
        {/* Wilson Image */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <img
            src={wilson2}
            alt="Wilson Alzate compartiendo su historia"
            className="rounded-2xl shadow-card w-full object-cover aspect-square"
            loading="lazy"
          />
        </div>

        {/* Story Content */}
        <div className="lg:col-span-2 order-1 lg:order-2 space-y-6 text-lg text-foreground leading-relaxed">
          <p>
            Crecí escuchando las historias de mi papá. Historias de un campo de precariedad, de levantarse antes del sol para trabajar hasta el agotamiento solo para subsistir. Mi padre aprendió que el éxito requería un sacrificio extremo...{" "}
            <strong className="text-primary">pero yo me enamoré del campo y sabía que tenía que haber otra forma.</strong>
          </p>

          <blockquote className="bg-card p-6 sm:p-8 rounded-2xl border-l-4 border-accent shadow-card italic text-foreground/90">
            "¿Qué legado voy a dejarle a mi hijo? ¿Y si a los 16 años quiere estudiar algo... cómo voy a pagarlo si hoy no tengo ahorros?"
          </blockquote>

          <p>
            Ese fue mi despertar. Descubrí que el dinero es una herramienta para servir. Que el agro es rentable cuando se maneja bien y que el problema no era el campo, sino la falta de un sistema y las creencias limitantes.
          </p>

          <p>
            Hoy, después de <strong className="text-primary">13 años como zootecnista y asesor</strong>, he diseñado un método para que tú también vivas una vida abundante, próspera y en familia desde el campo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
