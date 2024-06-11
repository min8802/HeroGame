import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header:FC = () => {

    const navigate = useNavigate();

    return (
        <Flex bgColor="blue.100" justify="center" gap={8}>
            <Button onClick={() => {navigate("/")}}>Home</Button>
            <Button onClick={() => {navigate("/game")}}>Game</Button>
            <Button onClick={() => {navigate("/mint")}}>Mint</Button>
        </Flex>
    )
}

export default Header;