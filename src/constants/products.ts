export const products = ["Animales", "Máscaras", "Llaveros"];

export enum EnumAnimalsCategories {
  All = "Todos",
  DINO = "Dinosaurio",
  DRAGONS = "Dragones",
  INSECTS = "Insectos",
  MAMMALS = "Mamifero",
  MARINE = "Maritimo",
  REPTILE = "Reptil",
}

export const getAnimalsCategories = () => Object.values(EnumAnimalsCategories);
