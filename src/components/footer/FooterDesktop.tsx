import { contactLinks } from "@/constants/contacts";
import { footerLinks } from "@/constants/footerLinks";
import Icon from "@/styles/svg";
import BigLogoSVG from "@/styles/svg/BigLogoSVG";
import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const FooterDesktop = () => {
  return (
    <Grid
      width="100%"
      padding="32px"
      backgroundColor="#FFF9F9"
      templateColumns="repeat(3, 1fr)"
      gap="32px"
    >
      <GridItem>
        <BigLogoSVG />
      </GridItem>
      <GridItem>
        <VStack alignItems="flex-start">
          <Heading fontSize="20px"> Alta Vibra 3D </Heading>
          {footerLinks.map((link) => (
            <Text key={link}>{link}</Text>
          ))}
        </VStack>
      </GridItem>
      <GridItem>
        <VStack alignItems="flex-start">
          <Heading fontSize="20px"> Contactanos </Heading>
          <VStack gap="16px" alignItems="flex-end">
            {contactLinks.map((link) => (
              <HStack gap="16px" alignItems="center" key={link.label}>
                <Text>{link.label}</Text>
                <Icon name={link.icon} />
              </HStack>
            ))}
          </VStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default FooterDesktop;
