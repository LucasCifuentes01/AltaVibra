import CommentCard from "@/components/CommentCard.tsx";
import BackButton from "@/components/back-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";

export default function Clients() {
  return (
    <VStack>
      <Header />
      <BackButton />
      <VStack marginBottom="32px">
        <Heading>Comentarios de clientes</Heading>
        <Text textAlign="center">
          ¡Gracias a nuestros increíbles clientes por sus comentarios y
          elegirnos!
        </Text>
      </VStack>
      <HStack
        justifyContent="center"
        paddingX="16px"
        flexWrap="wrap"
        gap="32px"
      >
        <CommentCard
          name="Anubis"
          location="Córdoba, Argentina"
          age="10 años"
          comment="“Me gustan los 3D de alta vibra porque, son muñecos para jugar y coleccionar, son duraderos, son muy coloridos y están hecho por chicas de acá. Me gustan mucho los diseños que tienen y los personajes.”"
        />
        <CommentCard
          name="Scarlett"
          location="Córdoba, Argentina"
          age="40 años"
          comment="“Me gustan mucho los juguetes tanto para regalar como, para decorar la casa. La atención es hermosa porque se nota que aman lo que hacen. Los juguetes son super duraderos, los tenemos hace un montón y no se rompen y les permite a los niños jugar de formas creativas, fuera de la pantalla. Me encantan los juguetes de 3D y AltaVIbra!”"
        />
        <CommentCard
          name="Hikaru"
          location="Córdoba, Argentina"
          age="7 años"
          comment="“De los 3D de AltaVibra me encantan los colores y los diseños que tienen.”"
        />
      </HStack>
      <VStack marginY="100px">
        <Text textAlign="center" color="#1A202C" fontSize="18px">
          ¡Si te gustó nuestro producto, déjanos un comentario para hacérnoslo
          saber!
        </Text>
      </VStack>
      <Footer />
    </VStack>
  );
}
