import Services from "@/components/hotel/Services/Services";
import TakeATour from "@/components/hotel/TakeATour/TakeATour";
import Session from "@/components/layout/Session/Session";

export default function About() {
  return (
    <div>
      <Session title={"Lorem Ipsum"}
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      buttonText={"Read More"} imageUrl={"https://picsum.photos/1920"}></Session>
      <Session title={"Lorem Ipsum"}
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      buttonText={"Read More"} imageUrl={"https://picsum.photos/1920"}
      reverse={true} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></Session>
      <Session title={"Nossa História"}
      subtitle="Desde a sua fundação, o Hotel White Label tem se dedicado a oferecer experiências excepcionais aos seus hóspedes."
      description="Fundado em 1990, o hotel começou como um pequeno refúgio familiar e cresceu para se tornar um destino de renome, conhecido por sua hospitalidade e excelência."
      imageUrl={"https://picsum.photos/1920/1080"}></Session>
      <Session title={"Nossos Princípios"}
      subtitle="Compromisso com a qualidade, sustentabilidade e satisfação do cliente."
      description="Acreditamos em criar um ambiente acolhedor e sustentável, onde cada hóspede se sinta especial. Nosso compromisso é com a excelência em todos os aspectos do serviço."
      imageUrl={"https://picsum.photos/1920/1080"} reverse={true}></Session>
      <Session title={"Nossos Objetivos"}
      subtitle="Continuar inovando e proporcionando experiências inesquecíveis."
      description="Nosso objetivo é ser referência no setor hoteleiro, oferecendo serviços personalizados e mantendo um impacto positivo na comunidade e no meio ambiente."
      imageUrl={"https://picsum.photos/1920/1080"}></Session>
      <Services></Services>
      <TakeATour></TakeATour>
    </div>
  );
}
