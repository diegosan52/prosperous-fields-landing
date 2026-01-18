import { AlertTriangle } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="urgency-bar flex items-center justify-center gap-2">
      <AlertTriangle className="w-4 h-4" />
      <span>OFERTA ESPECIAL: 50% DE DESCUENTO SOLO HASTA AGOTAR CUPOS</span>
    </div>
  );
};

export default UrgencyBar;
