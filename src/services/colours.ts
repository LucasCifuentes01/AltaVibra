import colours from "@/db/colours.json";
import { Colour } from "@/models/Color.model";

export const getColours = (): Array<Colour> => {
  return colours;
};
