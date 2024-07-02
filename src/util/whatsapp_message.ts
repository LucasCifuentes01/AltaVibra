import { PONE_NUMBER } from "@/constants/phone";

export const SendWhatsappMesagge = () => {
  const url = `https://api.whatsapp.com/send?phone=${PONE_NUMBER}`;

  return window.open(url, "_blank");
};
