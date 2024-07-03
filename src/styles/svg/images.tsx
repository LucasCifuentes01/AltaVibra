import alien from "@/styles/images/Alien.jpeg";
import anquilosaurio from "@/styles/images/Anquilosaurio.jpg";
import araña from "@/styles/images/Araña.jpeg";
import ballena from "@/styles/images/Ballena.jpg";
import beluga from "@/styles/images/Beluga.jpg";
import camaleón from "@/styles/images/Camaleón.jpg";
import cangrejo from "@/styles/images/Cangrejo.jpeg";
import cobra from "@/styles/images/Cobra.jpeg";
import cocodrilo_bebe from "@/styles/images/Cocodrilo_bebe.jpg";
import cocodrilo from "@/styles/images/Cocodrilo.jpg";
import delfin from "@/styles/images/Delfín.jpg";
import dilofosaurio from "@/styles/images/Dilofosaurio.jpg";
import dragon_alas_rigidas from "@/styles/images/Dragon_alas_rigidas.jpg";
import dragon_bebe from "@/styles/images/Dragon_bebe.jpg";
import dragon_cristal_con_alas from "@/styles/images/Dragon_cristal_con_alas.jpg";
import dragon_cristal from "@/styles/images/Dragon_cristal.jpeg";
import dragon_toro from "@/styles/images/Dragon_toro.jpg";
import dragon_de_hojas from "@/styles/images/Dragon_de_hojas.jpg";
import dragon_de_rosas_con_alas from "@/styles/images/Dragon_de_rosas_con_alas.jpg";
import dragon_imperial from "@/styles/images/Dragon_imperial.jpg";
import erizo_grande from "@/styles/images/Erizo_grande.jpg";
import iguana from "@/styles/images/Iguana.jpg";
import lago_ness from "@/styles/images/Lago_ness.jpeg";
import leon from "@/styles/images/Lago_ness.jpeg";
import pulpo from "@/styles/images/Pulpo.jpg";
import rana_Reyes from "@/styles/images/Rana_Reyes.jpg";
import robot from "@/styles/images/Robot.jpg";
import robot_F from "@/styles/images/Robot_F.jpg";
import serpiente from "@/styles/images/Serpiente.jpg";
import tiburon from "@/styles/images/Tiburon.jpg";
import tiburon_martillo from "@/styles/images/Tiburon_martillo.jpg";
import tortuga from "@/styles/images/Tortuga.jpg";
import trex from "@/styles/images/Trex.jpg";
import triceratop from "@/styles/images/Triceratop.jpg";
import triceratop_con_boton from "@/styles/images/Triceratop_con_boton.jpeg";
import zorro from "@/styles/images/Zorro.jpg";
import mascara_azul from "@/styles/images/Mascara_azul.jpeg";
import axolote_llavero from "@/styles/images/Axolote_llavero.jpeg";
import broncosaurio_llavero from "@/styles/images/Broncosaurio_llavero.jpg";
import caracol_llavero from "@/styles/images/Caracol_llavero.jpg";
import cocodrilo_llavero from "@/styles/images/Cocodrilo_llavero.jpg";
import delfin_llavero from "@/styles/images/Delfin_llavero.jpg";
import gallina_llavero from "@/styles/images/Gallina_llavero.jpg";
import morza_llavero from "@/styles/images/Morza_llavero.jpg";
import perrito_llavero from "@/styles/images/Perrito_llavero.jpg";
import perro_salchicha_llavero from "@/styles/images/Perro_salchicha_llavero.jpg";
import murcielago_llavero from "@/styles/images/Murcielago_llavero.jpg";
import narval_llavero from "@/styles/images/Narval_llavero.jpg";
import triceratops_llavero from "@/styles/images/Triceratops_llavero.jpg";
import unicornio_llavero from "@/styles/images/Unicornio_llavero.jpg";
import chimuelo_bebe_llavero from "@/styles/images/Chimuelo_bebe_llavero.jpg";
import osito_llavero from "@/styles/images/Osito_llavero.jpg";
import t_Rex_llavero from "@/styles/images/T_Rex_llavero.jpg";
import gatito_llavero from "@/styles/images/gatito_llavero.jpg";
import lagarto_dragon_llavero from "@/styles/images/Lagarto_dragon_llavero.jpg";
import lagartija_llavero from "@/styles/images/Lagartija_llavero.jpg";
import pingüino_llavero from "@/styles/images/Pingüino_llavero.jpg";
import rana_llavero from "@/styles/images/Rana_llavero.jpg";
import tiburon_llavero from "@/styles/images/Tiburon_llavero.jpg";
import carnotauro from "@/styles/images/Carnotauro.jpg";
import diloposaurio from "@/styles/images/Diloposaurio.jpg";
import tigre from "@/styles/images/Tigre.jpg";

import Image from "next/image";
import css from "./images.module.css";

export const IMAGE_MAP = {
  Alien: alien,
  Anquilosaurio: anquilosaurio,
  Araña_bebe: araña,
  Araña_grande: araña,
  Araña_media: araña,
  Ballena: ballena,
  Beluga: beluga,
  Camaleon: camaleón,
  Cangrejo: cangrejo,
  Cobra: cobra,
  Cocodrilo_bebe: cocodrilo_bebe,
  Cocodrilo: cocodrilo,
  Delfin: delfin,
  Dilofosaurio: dilofosaurio,
  Dragon_alas_rigidas: dragon_alas_rigidas,
  Dragon_bebe: dragon_bebe,
  Dragon_cristal_con_alas: dragon_cristal_con_alas,
  Dragon_cristal: dragon_cristal,
  Dragon_toro: dragon_toro,
  Dragon_de_hojas: dragon_de_hojas,
  Dragon_de_rosas: dragon_de_rosas_con_alas,
  Dragon_imperial: dragon_imperial,
  Erizo_grande: erizo_grande,
  Iguana: iguana,
  Lago_ness: lago_ness,
  Leon: leon,
  Pulpo: pulpo,
  Rana_Reyes: rana_Reyes,
  Robot: robot,
  Robot_F: robot_F,
  Serpiente: serpiente,
  Tiburon: tiburon,
  Tiburon_martillo: tiburon_martillo,
  Tortuga: tortuga,
  Trex: trex,
  Triceratop: triceratop,
  Triceratop_con_boton: triceratop_con_boton,
  Zorro: zorro,
  Mascara_azul: mascara_azul,
  Axolote_llavero: axolote_llavero,
  Broncosaurio_llavero: broncosaurio_llavero,
  Caracol_llavero: caracol_llavero,
  Cocodrilo_llavero: cocodrilo_llavero,
  Delfin_llavero: delfin_llavero,
  Gallina_llavero: gallina_llavero,
  Morza_llavero: morza_llavero,
  Perrito_llavero: perrito_llavero,
  Perro_salchicha_llavero: perro_salchicha_llavero,
  Murcielago_llavero: murcielago_llavero,
  Narval_llavero: narval_llavero,
  Triceratops_llavero: triceratops_llavero,
  Unicornio_llavero: unicornio_llavero,
  Chimuelo_bebe_llavero: chimuelo_bebe_llavero,
  Osito_llavero: osito_llavero,
  T_Rex_llavero: t_Rex_llavero,
  gatito_llavero: gatito_llavero,
  Lagarto_dragon_llavero: lagarto_dragon_llavero,
  Lagartija_llavero: lagartija_llavero,
  Pingüino_llavero: pingüino_llavero,
  Rana_llavero: rana_llavero,
  Tiburon_llavero: tiburon_llavero,
  Carnotauro: carnotauro,
  Diloposaurio: diloposaurio,
  Tigre: tigre,
};

export type KnownImageValues = keyof typeof IMAGE_MAP;

interface IProps {
  name: KnownImageValues;
  width?: number;
  height?: number;
}

const CustomImage = ({ name, width, height }: IProps): JSX.Element => (
  <Image
    className={css.cardImage}
    src={IMAGE_MAP[name]}
    alt={name}
    width={width}
    height={height}
  />
);

export default CustomImage;
