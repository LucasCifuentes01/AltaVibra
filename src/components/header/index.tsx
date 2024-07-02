import useBreakpoints from "@/hooks/useBreakpoints";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useRouter } from "next/router";

export interface IHeader {
  handleClick: (path: string) => void;
  handleClickByProccess: () => void;
  handleClickProducts: () => void;
}

const Header = () => {
  const { isMobile } = useBreakpoints();

  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const handleClickByProccess = () => {
    const div = document.getElementById("buyProccess");

    if (div) {
      div?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  const handleClickProducts = () => {
    const div = document.getElementById("products");

    if (div) {
      div?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  if (isMobile)
    return (
      <HeaderMobile
        handleClick={handleClick}
        handleClickByProccess={handleClickByProccess}
        handleClickProducts={handleClickProducts}
      />
    );

  return (
    <HeaderDesktop
      handleClick={handleClick}
      handleClickByProccess={handleClickByProccess}
      handleClickProducts={handleClickProducts}
    />
  );
};

export default Header;
