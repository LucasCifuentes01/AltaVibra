import Logo from "@/styles/svg/Logo";
import { Box, Button, HStack } from "@chakra-ui/react";
import { IHeader } from ".";

const HeaderDesktop = ({
  handleClick,
  handleClickByProccess,
  handleClickProducts,
}: IHeader) => {
  return (
    <HStack
      paddingY="8px"
      paddingX="98px"
      width="100%"
      justifyContent="space-between"
      borderBottom="1px solid #DEE5ED"
      position="sticky"
      top="0"
      zIndex="99999"
      backgroundColor="#FFF"
    >
      <HStack flex="1" gap="48px">
        <Button variant="link" onClick={() => handleClick("/")}>
          Home
        </Button>
        <Button variant="link" onClick={handleClickProducts}>
          Productos
        </Button>
      </HStack>
      <Box cursor="pointer" onClick={() => handleClick("/")}>
        <Logo />
      </Box>
      <HStack flex="1" gap="48px" justifyContent="flex-end">
        <Button variant="link" onClick={handleClickByProccess}>
          Proceso de compra
        </Button>
        <Button variant="link" onClick={() => handleClick("/clientes")}>
          Clientes
        </Button>
        <Button variant="link" onClick={() => handleClick("/nosotras")}>
          Nosotras
        </Button>
      </HStack>
    </HStack>
  );
};

export default HeaderDesktop;
