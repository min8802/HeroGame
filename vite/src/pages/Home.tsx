import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Element } from "react-scroll";



const Home:FC = () => {
    return (
        <Flex minH="100vh" flexDir="column">
            <Element name="section1">
                <Image src="./Images/bg1.webp" />
            </Element>
            <Element name="section2">
                <Image src="./Images/bg2.webp" />
            </Element>
            <Element name="section3">
                <Image src="./Images/bg3.webp" />
            </Element>
        </Flex>
    )
}

export default Home;