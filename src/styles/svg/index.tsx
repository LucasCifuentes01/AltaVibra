import CatalogSVG from "./CatalogSVG";
import FacebookSVG from "./FacebookSVG";
import InstagramSVG from "./InstagramSVG";
import LocationSVG from "./LocationSVG";
import WhatsAppRoundedSVG from "./WhatsAppRoundedSVG";
import WhatsAppSVG from "./WhatsAppSVG";

export const ICON_MAP = {
  catalog: CatalogSVG,
  whatsapp: WhatsAppSVG,
  location: LocationSVG,
  instagram: InstagramSVG,
  facebook: FacebookSVG,
  whatsapp_rounded: WhatsAppRoundedSVG,
};

export type KnownIconValues = keyof typeof ICON_MAP;

interface IProps {
  name: KnownIconValues;
}

const Icon = ({ name }: IProps): JSX.Element => {
  const Comp = ICON_MAP[name];

  if (!Comp) {
    return <></>;
  }

  return <Comp />;
};

export default Icon;
