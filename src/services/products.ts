import { EnumAnimalsCategories } from "@/constants/products";
import aminals from "@/db/animals.json";
import masks from "@/db/masks.json";
import keyChain from "@/db/keychains.json";

interface IGetAnimalsProps {
  category: EnumAnimalsCategories;
}

export const getAnimals = ({ category }: IGetAnimalsProps) => {
  if (category === EnumAnimalsCategories.All) return aminals;

  return aminals.filter((animal) => animal.category === category);
};
export const getAllProducts = () => {
  const products: any = [];
  return products.concat(aminals).concat(masks).concat(keyChain);
};

export const getMasks = () => masks;
export const getKeyChain = () => keyChain;
export const getProductByName = (name: string) => {
  const products = getAllProducts();

  return products.find((product: any) => product.name === name);
};
