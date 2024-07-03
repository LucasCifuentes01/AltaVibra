import { IContactLinks } from "@/models/contacts.model";
import { PONE_NUMBER } from "./phone";

export const contactLinks: Array<IContactLinks> = [
  {
    label: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/altavibra_3d/",
  },
  {
    label: "Whatsapp",
    icon: "whatsapp_rounded",
    link: `https://api.whatsapp.com/send?phone=${PONE_NUMBER}`,
  },
];
