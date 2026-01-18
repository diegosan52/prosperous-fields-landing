import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Necesito saber de finanzas avanzadas?",
      answer: "No. Wilson enseña con palabras sencillas y herramientas prácticas diseñadas para el día a día en el campo."
    },
    {
      question: "¿Qué pasa si no puedo asistir a las sesiones en vivo?",
      answer: "Todas las clases quedan grabadas y tendrás acceso a ellas durante un año entero en la plataforma Hotmart."
    },
    {
      question: "¿Cómo agendo mi asesoría 1:1?",
      answer: "Una vez realices el pago, recibirás un correo con las instrucciones para agendar tu sesión personalizada con Wilson Alzate."
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary font-display">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border-none shadow-card"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
