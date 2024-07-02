import Footer from "@/components/footer";
import Header from "@/components/header";
import OurProducts from "@/components/our-products";
import useBreakpoints from "@/hooks/useBreakpoints";
import { Colour } from "@/models/Color.model";
import { getColours } from "@/services/colours";
import { getProductByName } from "@/services/products";
import CustomImage from "@/styles/svg/images";
import { SendWhatsappMesagge } from "@/util/whatsapp_message";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPageContext } from "next";

interface IProps {
  id: string;
}

ProductDetail.getInitialProps = async (ctx: NextPageContext) => {
  return {
    id: ctx.query.id || "",
  };
};

const ColourItem = ({ colour }: { colour: Colour }) => {
  return (
    <VStack>
      <Box
        width="46px"
        height="46px"
        borderRadius="50%"
        backgroundColor={colour.value}
        border="1px solid black"
      ></Box>
      <Text textAlign="center" maxWidth="60px">
        {colour.name}
      </Text>
    </VStack>
  );
};

export default function ProductDetail({ id }: IProps) {
  const product = getProductByName(id);
  const colours = getColours();
  const { isMobile } = useBreakpoints();

  return (
    <VStack>
      <Header />
      {isMobile ? (
        <VStack paddingX="16px">
          <VStack alignItems="flex-start">
            <Text fontSize="32px" fontWeight="bold">
              {product.name}
            </Text>
          </VStack>
          <CustomImage width={500} name={product.name} />
          <VStack gap="32px" alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Text fontSize="20px" color="#595959">
                Descripción:
              </Text>
              <Text fontSize="20px" color="#595959">
                {product.description}
              </Text>
              <Text fontSize="20px" color="#595959">
                Elegí el diseño en el color que más te guste
              </Text>
              <Text fontSize="16px" color="#595959">
                Colores
              </Text>
            </VStack>
            <HStack alignItems="flex-start" flexWrap="wrap" width="100%">
              {colours.map((colour) => (
                <ColourItem
                  key={`item_${colour.name}_${colour.value}`}
                  colour={colour}
                />
              ))}
            </HStack>
            <Button
              onClick={SendWhatsappMesagge}
              color="#211F1F"
              width={"100%"}
              size="lg"
              variant="outline"
            >
              Comprar
            </Button>
          </VStack>
        </VStack>
      ) : (
        <Grid padding="60px" templateColumns="repeat(2, 1fr)">
          <GridItem>
            <CustomImage width={500} name={product.name} />
          </GridItem>
          <GridItem>
            <VStack alignItems="flex-start">
              <Text fontSize="32px" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="20px" color="#595959">
                Descripción:
              </Text>
              <Text fontSize="20px" color="#595959">
                {product.description}
              </Text>
              <Text fontSize="20px" color="#595959">
                Elegí el diseño en el color que más te guste
              </Text>
              <Text fontSize="16px" color="#595959">
                Colores
              </Text>
              <HStack alignItems="flex-start" flexWrap="wrap" width="100%">
                {colours.map((colour) => (
                  <ColourItem
                    key={`item_${colour.name}_${colour.value}`}
                    colour={colour}
                  />
                ))}
              </HStack>
              <Button
                onClick={SendWhatsappMesagge}
                color="#211F1F"
                width="300px"
                size="lg"
                variant="outline"
              >
                Comprar
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      )}

      <VStack paddingX="16px">
        <Text fontSize="48px">Mira todo aquí</Text>
        <Text textAlign="center" fontSize="18px">
          Estos son todos nuestros productos, elegí los que más te gusten y
          pedinoslo por whatsapp!
        </Text>
      </VStack>
      <OurProducts />
      <Footer />
    </VStack>
  );
}
