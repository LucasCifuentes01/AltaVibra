import { useMediaQuery } from "@chakra-ui/react";

const BOUNDS = {
  MD: 768,
  XL: 1200,
  XXL: 1440,
};

const useBreakpoints = () => {
  const [isMobile, isDesktop] = useMediaQuery(
    [
      `(min-width: 0px) and (max-width: ${BOUNDS.MD - 1}px)`,
      `(min-width: ${BOUNDS.XL}px) and (max-width: ${BOUNDS.XXL}px)`,
    ],
    { ssr: true, fallback: false }
  );

  return {
    isMobile,
    isDesktop,
  };
};
export default useBreakpoints;
