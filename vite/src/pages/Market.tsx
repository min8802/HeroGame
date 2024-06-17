import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const Market:FC = () => {
    return (
        <>
        <Flex display={["none", "none", "flex"]} minH="100vh" flexDir="column">
            <Image src="./Images/marketbg.webp"/>
        </Flex>
        <Flex display={["flex", "flex", "none"]} minH="100vh" flexDir="column">
            <Image src="./Images/marketbg1.webp"/>
        </Flex>
        </>
    )
}

export default Market;