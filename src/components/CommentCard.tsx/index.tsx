import { Box, HStack, Text, VStack } from "@chakra-ui/react";

interface IProps {
  name: string;
  location: string;
  age: string;
  comment: string;
}

const CommentCard = ({ name, location, age, comment }: IProps) => {
  return (
    <VStack
      height="300px"
      maxWidth="400px"
      padding="30px"
      backgroundColor="#80D5F0"
      borderRadius="10px"
    >
      <HStack justifyContent="space-between" width="100%">
        <HStack gap="16px">
          <Box
            width="40px"
            height="40px"
            backgroundColor="#00AFEF"
            borderRadius="50%"
          ></Box>
          <VStack gap="0">
            <Text fontSize="18px" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="14px">{location}</Text>
          </VStack>
        </HStack>
        <Text fontSize="16px">{age}</Text>
      </HStack>

      <Box height="100%" display="flex" alignItems="center">
        <Text fontSize="14px">{comment}</Text>
      </Box>
    </VStack>
  );
};

export default CommentCard;
