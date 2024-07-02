import { Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import bannerInfo from "@/styles/images/info-banner.svg";
import bannerInfoMobile from "@/styles/images/info-banner-mobile.svg";
import useBreakpoints from "@/hooks/useBreakpoints";

const BuyProcess = () => {
  const { isMobile } = useBreakpoints();
  return (
    <VStack id="buyProccess" paddingTop="95px" gap="45px">
      <VStack>
        <Heading>Proceso de compra</Heading>
        <Text maxW="530px" textAlign="center">
          Accede al catalogo de productos, elegí el que más te guste y
          contáctate con nosotras para finalizar la compra.
        </Text>
      </VStack>
      <Image src={isMobile ? bannerInfoMobile : bannerInfo} alt="banner-info" />
    </VStack>
  );
};
export default BuyProcess;
