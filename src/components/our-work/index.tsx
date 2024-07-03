import { HStack, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";

import wokr1 from "@/styles/images/work1.png";
import wokr2 from "@/styles/images/work2.png";
import useBreakpoints from "@/hooks/useBreakpoints";

const OurWork = () => {
  const { isMobile } = useBreakpoints();

  return (
    <VStack
      marginY={isMobile ? "50px" : "122px"}
      width="100%"
      paddingY="32px"
      backgroundColor="#FFF9F9"
      gap="16px"
      paddingX={isMobile ? "16px" : "0"}
    >
      <Heading>Nuestro trabajo</Heading>
      <HStack justifyContent="center" width="100%" flexWrap="wrap" gap="20px">
        <Image src={wokr1} alt="trabajo 1" />
        <Image src={wokr2} alt="trabajo 2" />
      </HStack>
    </VStack>
  );
};

export default OurWork;
