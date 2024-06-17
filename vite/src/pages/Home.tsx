import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";



const Home:FC = () => {
    return (
        <Flex minH="100vh" flexDir="column" gap={24}>
            <ScrollLink to="section1" spy={true} smooth={true} duration={500} onScroll={(e) => console.log(e)}>
                <Image src="./Images/bg1.webp"/>
            </ScrollLink>
            <ScrollLink to="section1" spy={true} smooth={true} duration={500}>
                <Image src="./Images/bg2.webp"/>
            </ScrollLink>
            <ScrollLink to="section1" spy={true} smooth={true} duration={500}>
                <Image src="./Images/bg3.webp"/>
            </ScrollLink> 
        </Flex>
    )
}

export default Home;