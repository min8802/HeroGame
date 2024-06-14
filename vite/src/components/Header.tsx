import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header:FC = () => {

    const navigate = useNavigate();

    return (
        <Flex alignItems="center" h={20} bgColor="blue.100" justify="center" gap={8}>
            <Flex maxW={120}>
                <Image src="./Images/logo.webp"/>
            </Flex>
            <Flex>
                <Flex>
                    <Button onClick={() => {navigate("/")}}>Home</Button>
                    <Button onClick={() => {navigate("/game")}}>Game</Button>
                    <Button onClick={() => {navigate("/mint")}}>Mint</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;