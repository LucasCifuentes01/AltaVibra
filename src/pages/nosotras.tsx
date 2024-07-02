import Footer from "@/components/footer";
import Header from "@/components/header";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import carpa from "@/styles/images/carpa.png";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function Nosotras() {
  const { isMobile } = useBreakpoints();
  return (
    <VStack gap="32px">
      <Header />
      <Heading>Nosotras</Heading>
      <VStack
        alignItems="flex-start"
        paddingX={isMobile ? "16px" : "90px"}
        gap="32px"
        marginBottom="50px"
      >
        <Text fontSize="16px" lineHeight="24px">
          Después de años dedicándome a la maternidad, me encontré en un momento
          de inflexión para mí, la pregunta que surgió en mi mente fue: ¿Qué
          estoy haciendo con mi vida? Esa pregunta fue la primera de muchas.
          Mientras estaba en esta reflexión comencé a informarme sobre el mundo
          de las impresiones 3D, sin saber muy bien por qué. Pasaban los días y
          yo continuaba investigando y apasionándome…hasta que decidí ponerle un
          freno y preguntarme: ¿Realmente me gusta esto? ¿cómo me siento?
        </Text>
        <Text fontSize="16px" lineHeight="24px">
          Me sumergí en una búsqueda interna, confrontando el miedo a los
          posibles resultados negativos, sin embargo, a pesar de todo,
          igualmente decidí que lo haría. Entonces, me dirigí a comprar una
          impresora, con una única certeza: si algo sale mal, aún así, valdría
          la pena la experiencia. Comencé imprimiendo productos para el hogar:
          macetas, exprimidores de pasta, porta cepillos de dientes, floreros,
          cuadros ¡y más!  Todos estos productos se exhibieron en la feria de
          Carlos Paz, donde los clientes empezaron a dejarme sus comentarios. En
          un momento, una clienta se acercó y me preguntó: “¿no los hacés
          articulados?” , al preguntarle para qué lo usaría, me sorprendió
          compartiéndome todos los beneficios didácticos y des-estresantes que
          encontraba en estos productos. Esto despertó mi curiosidad y me lancé
          en busca de más información y diseños. Después de una búsqueda
          exhaustiva, comencé con personajes pequeños, en principio Mario y
          Luigi Bros, simples y sin pintar. La reacción de mis clientes de
          diversas edades fue tan buena que así se inició este viaje de buscar
          más y más diseños nuevos. Fue una temporada de felicidad, viendo el
          impacto de mis productos y escuchando los comentarios de la gente.
          Decidí, además, añadir un toque especial a mis creaciones: pintarles
          los ojitos, manteniendo la esencia del producto, pero dándoles una
          mirada tierna.
        </Text>
        <Text fontSize="16px" lineHeight="24px">
          Así es como comenzó este viaje, creciendo entre pruebas y errores, con
          el objetivo de ofrecer a nuestros clientes una experiencia única, y no
          solo una compra más. Al pasar el tiempo, mis dos hijas comenzaron a
          acompañarme en este viaje. Hoy, soy una orgullosa mamá acompañada a
          cada paso, y este emprendimiento comenzó a convertirse en un negocio
          familiar. En Alta Vibra nos enfocamos en la experiencia del cliente,
          capturando emociones y pasiones con cada color, personaje, animal, ¡y
          más!
        </Text>
        <Text fontWeight="bold" fontSize="16px" lineHeight="24px">
          No importa la edad o el género, desde Alta Vibra buscamos que cada
          cliente pueda SENTIR con cada movimiento y experimentar la LIBERTAD DE
          SER.
        </Text>
      </VStack>

      <Image src={carpa} alt="carpa" />
      <Footer />
    </VStack>
  );
}
