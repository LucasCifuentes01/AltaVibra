import Header from "@/components/header";
import Image from "next/image";
import banner from "@/styles/images/banner.png";
import banner_mobile from "@/styles/images/banner_mobile.png";

import { Box, VStack } from "@chakra-ui/react";
import BuyProcess from "@/components/buy-process";
import OurProducts from "@/components/our-products";
import AboutUs from "@/components/about-us";
import OurWork from "@/components/our-work";
import Footer from "@/components/footer";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function Home() {
  const { isMobile } = useBreakpoints();
  return (
    <VStack gap="32px">
      <Header />
      <Box position="relative" height="419px" width="100%">
        <Image fill src={isMobile ? banner_mobile : banner} alt="banner" />
      </Box>
      <BuyProcess />
      <OurProducts />
      <AboutUs />
      <OurWork />
      <Footer />
    </VStack>
  );
}
