import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <HStack width="100%" padding="16px">
      <ArrowBackIcon cursor="pointer" onClick={handleBack} w={8} h={8} />
    </HStack>
  );
};

export default BackButton;
