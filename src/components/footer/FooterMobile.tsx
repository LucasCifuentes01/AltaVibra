import { contactLinks } from "@/constants/contacts";
import { footerLinks } from "@/constants/footerLinks";
import Icon from "@/styles/svg";
import BigLogoSVG from "@/styles/svg/BigLogoSVG";
import { redirectOutSide } from "@/util/redirectOutSideBlank";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const FooterMobile = () => {
  return (
    <VStack width="100%" padding="32px" backgroundColor="#FFF9F9" gap="32px">
      <BigLogoSVG />
      <VStack>
        <Heading fontSize="20px"> Contactanos </Heading>
        <HStack gap="24px" alignItems="center">
          {contactLinks.map((link) => (
            <Box
              key={link.label}
              cursor="pointer"
              onClick={() => redirectOutSide(link.link)}
            >
              <Icon name={link.icon} />
            </Box>
          ))}
        </HStack>
      </VStack>
      <VStack>
        <Heading fontSize="20px"> Alta Vibra 3D </Heading>
        {footerLinks.map((link) => (
          <Text key={link}>{link}</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default FooterMobile;
