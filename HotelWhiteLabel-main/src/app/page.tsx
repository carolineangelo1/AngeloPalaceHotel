"use client";

import { useState } from "react";
import Services from "@/components/hotel/Services/Services";
import TakeATour from "@/components/hotel/TakeATour/TakeATour";
import Testimonial from "@/components/hotel/Testimonial/Testimonial";
import Session from "@/components/layout/Session/Session";
import Carousel from "@/components/layout/Session/Carousel";


export default function Home() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const recepcaoImages = [
    "/images/inicio/recepcao/parte-interna1.jpg",
    "/images/inicio/recepcao/recepcao.jpg",
    "/images/inicio/recepcao/recepcao1.jpg",
    "/images/inicio/recepcao/recepcao2.jpg",
    "/images/inicio/recepcao/recepcao3.jpg",
  ];

  return (
    <div>
      {/* ...outros componentes... */}
      <Session
        title="Recepção que acolhe"
        subtitle="Atendimento amigável desde a sua chegada"
        description="Nossa equipe está pronta para receber você com conforto e agilidade. Aqui, o acolhimento começa na porta de entrada."
        buttonText="Conheça mais"
        imageUrl="/images/inicio/recepcao/recepcao1.jpg"
        reverse
       
      />
      
    
      {/* ...outros componentes... */}
    </div>
  );
}