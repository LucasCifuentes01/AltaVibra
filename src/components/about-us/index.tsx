import Icon, { KnownIconValues } from "@/styles/svg";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import carpa from "@/styles/images/carpa.png";
import { Property } from "csstype";
import useBreakpoints from "@/hooks/useBreakpoints";

interface IAboutUsProps {
  icon: KnownIconValues;
  title: string;
  description: string;
  justify?: Property.JustifyContent;
}

const AboutUsItem = ({
  icon,
  title,
  description,
  justify = "flex-start",
}: IAboutUsProps) => {
  return (
    <VStack
      width="100%"
      height="100%"
      alignItems="flex-start"
      justifyContent={justify}
    >
      <HStack alignItems="flex-start">
        <Box padding="12px" borderRadius="15px" backgroundColor="#FF7EBD">
          <Icon name={icon} />
        </Box>
        <Heading fontSize="22px">{title}</Heading>
      </HStack>
      <Text>{description}</Text>
    </VStack>
  );
};

const AboutUs = () => {
  const { isMobile } = useBreakpoints();
  return (
    <HStack
      alignItems="flex-start"
      gap="88px"
      height={isMobile ? "400px" : "528px"}
      paddingX={isMobile ? "16px" : "0"}
    >
      {!isMobile && <Image src={carpa} alt="carpa" />}
      <VStack
        alignItems="flex-start"
        justifyContent="space-between"
        height="100%"
      >
        <AboutUsItem
          icon="catalog"
          title="Somos"
          description="Somos un emprendimiento familiar dedicado a crear diseños articulados en 3D."
        />
        <AboutUsItem
          icon="whatsapp"
          title="Atención por WhatsApp"
          description="Contactanos directamente a nuestro whasapp"
          justify="center"
        />
        <AboutUsItem
          icon="location"
          title="Ubicación"
          description="¡Escribanos para saber donde vamos a estar está semana!"
          justify="flex-end"
        />
      </VStack>
    </HStack>
  );
};

export default AboutUs;
