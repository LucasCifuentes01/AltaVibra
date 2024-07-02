import Logo from "@/styles/svg/Logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { IHeader } from ".";

const HeaderMobile = ({
  handleClick,
  handleClickByProccess,
  handleClickProducts,
}: IHeader) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <HStack
        paddingY="8px"
        paddingX="16px"
        width="100%"
        justifyContent="space-between"
        borderBottom="1px solid #DEE5ED"
        position="sticky"
        top="0"
        zIndex="999"
        backgroundColor="#FFF"
      >
        <Box onClick={() => onOpen()} flex="1">
          <HamburgerIcon w="50px" h="50px" />
        </Box>
        <Logo />
        <Box flex="1"></Box>
      </HStack>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex" padding="16px" zIndex="999999">
          <ModalCloseButton />
          <ModalBody>
            <VStack gap="32px" alignItems="flex-start">
              <Button
                variant="link"
                onClick={() => {
                  onClose();
                  handleClick("/");
                }}
              >
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  onClose();
                  handleClickProducts();
                }}
              >
                Productos
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  onClose();
                  handleClickByProccess();
                }}
              >
                Proceso de compra
              </Button>
              <Button variant="link" onClick={() => handleClick("/clientes")}>
                Clientes
              </Button>
              <Button variant="link" onClick={() => handleClick("/nosotras")}>
                Nosotras
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HeaderMobile;
