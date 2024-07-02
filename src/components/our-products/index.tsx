import { APP_PATHS } from "@/constants/paths";
import {
  EnumAnimalsCategories,
  getAnimalsCategories,
  products,
} from "@/constants/products";
import useBreakpoints from "@/hooks/useBreakpoints";
import { getAnimals, getKeyChain, getMasks } from "@/services/products";
import CustomImage, { KnownImageValues } from "@/styles/svg/images";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const OurProducts = () => {
  const { isMobile } = useBreakpoints();
  const router = useRouter();
  const [filterSelected, setFilterSelected] = useState<EnumAnimalsCategories>(
    EnumAnimalsCategories.All
  );
  const animals = getAnimals({ category: filterSelected });
  const masks = getMasks();
  const keyChains = getKeyChain();

  const handleFilterChange = (category: EnumAnimalsCategories) => {
    setFilterSelected(category);
  };

  const handleProductClick = (name: string) => {
    const url = APP_PATHS.PRODUCT(name);

    router.push(url);
  };

  return (
    <VStack id="products" width="100%" maxWidth="816px" paddingY="95px">
      <Heading>Nuestros productos</Heading>
      <Text textAlign="center">
        Conoce los distintos productos que tenemos para vos
      </Text>
      <Tabs isFitted width="100%">
        <TabList>
          {products.map((product) => (
            <Tab key={product} justifyContent="flex-start">
              {product}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {/* Animales */}
          <TabPanel>
            <HStack wrap="wrap">
              {getAnimalsCategories().map((category) => (
                <Button
                  onClick={() => handleFilterChange(category)}
                  key={category}
                  variant={filterSelected === category ? "solid" : "outline"}
                >
                  {category}
                </Button>
              ))}
            </HStack>
            <Grid
              marginTop="32px"
              gap="16px"
              templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
            >
              {animals.map((animal) => (
                <GridItem key={animal.name}>
                  <VStack alignItems="flex-start">
                    <Text fontSize="20px" fontWeight="bold">
                      {animal.name.replaceAll("_", " ")}
                    </Text>
                    <VStack>
                      <CustomImage name={animal.name as KnownImageValues} />
                      <Button
                        size="sm"
                        position="relative"
                        bottom="45px"
                        left="50px"
                        minW="60px"
                        height="25px"
                        onClick={() => handleProductClick(animal.name)}
                      >
                        Ver
                      </Button>
                    </VStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* Mascaras */}
          <TabPanel>
            <Grid
              marginTop="32px"
              gap="16px"
              templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
            >
              {masks.map((animal) => (
                <GridItem key={animal.name}>
                  <VStack alignItems="flex-start">
                    <Text fontSize="20px" fontWeight="bold">
                      {animal.name.replaceAll("_", " ")}
                    </Text>
                    <VStack>
                      <CustomImage
                        width={184}
                        name={animal.name as KnownImageValues}
                      />
                      <Button
                        size="sm"
                        position="relative"
                        bottom="45px"
                        left="50px"
                        minW="60px"
                        height="25px"
                        onClick={() => handleProductClick(animal.name)}
                      >
                        Ver
                      </Button>
                    </VStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          {/* llaveros */}
          <TabPanel>
            <Grid
              marginTop="32px"
              gap="16px"
              templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
            >
              {keyChains.map((animal) => (
                <GridItem key={animal.name}>
                  <VStack alignItems="flex-start">
                    <Text fontSize="20px" fontWeight="bold">
                      {animal.name.replaceAll("_", " ")}
                    </Text>
                    <VStack>
                      <CustomImage
                        width={184}
                        name={animal.name as KnownImageValues}
                      />
                      <Button
                        size="sm"
                        position="relative"
                        bottom="45px"
                        left="50px"
                        minW="60px"
                        height="25px"
                        onClick={() => handleProductClick(animal.name)}
                      >
                        Ver
                      </Button>
                    </VStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default OurProducts;
