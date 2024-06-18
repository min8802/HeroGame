import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const Mint:FC = () => {
    return (
        <>
        <Flex display={["none", "none", "flex"]} minH="100vh" flexDir="column">
            <Image src="./Images/mintbg.webp" minH="100vh"/>
        </Flex>
        <Flex display={["flex", "flex", "none"]} minH="100vh" flexDir="column">
            <Image src="./Images/mintbg1.webp"/>
        </Flex>
        </>
    )
}

export default Mint;