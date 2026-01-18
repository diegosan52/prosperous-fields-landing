import { Check } from "lucide-react";

interface DayCardProps {
  day: string;
  date: string;
  title: string;
  items: string[];
  featured?: boolean;
}

const DayCard = ({ day, date, title, items, featured }: DayCardProps) => (
  <div className={`card-elevated p-6 sm:p-8 ${featured ? 'border-t-4 border-accent' : ''}`}>
    <div className="text-accent font-bold mb-2 text-sm uppercase tracking-wide">
      {day} — {date}
    </div>
    <h3 className="text-xl font-bold mb-4 text-foreground font-display">{title}</h3>
    <ul className="space-y-3 text-muted-foreground">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  </div>
);

const ScheduleSection = () => {
  const days = [
    {
      day: "DÍA 1",
      date: "17 DE FEBRERO",
      title: "La Sabiduría del Pasado",
      items: [
        'Realizaremos la "poda" necesaria de tu 2025.',
        "Herramienta: La Rueda de la Vida.",
        "El Informe del Año y el poder del perdón financiero."
      ]
    },
    {
      day: "DÍA 2",
      date: "18 DE FEBRERO",
      title: "El Método FARO",
      items: [
        "Definición de prioridades reales para 2026.",
        "<strong>F</strong>oco, <strong>A</strong>lcance, <strong>R</strong>uta y <strong>O</strong>btención.",
        "Estrategia AMI: Acción Masiva Imperfecta."
      ],
      featured: true
    },
    {
      day: "DÍA 3",
      date: "19 DE FEBRERO",
      title: "Sistema y Sostenibilidad",
      items: [
        "Creación de hábitos y rutinas para el campo.",
        "Cómo gestionar energía, no solo tiempo.",
        "Declaración final y propósito para 2026."
      ]
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary font-display">
            Tu Hoja de Ruta de 3 Días
          </h2>
          <p className="text-muted-foreground">Del cierre consciente a la abundancia planificada</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {days.map((day, index) => (
            <DayCard key={index} {...day} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
