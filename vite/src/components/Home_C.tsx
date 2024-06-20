import { Flex, Image } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useObserve } from "../hooks";
import { scroller } from "react-scroll";

const Home_C: FC = () => {
  const { dom, isObserved } = useObserve();

  useEffect(() => {
    if (isObserved) {
      scroller.scrollTo("C", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [isObserved]);
  return (
    <Flex ref={dom} id="C" h="100vh">
      <Image src="./Images/bg3.webp" w="100%"/>
    </Flex>
  );
};

export default Home_C;