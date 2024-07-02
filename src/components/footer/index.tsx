import useBreakpoints from "@/hooks/useBreakpoints";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) {
    return <FooterMobile />;
  }

  return <FooterDesktop />;
};

export default Footer;
