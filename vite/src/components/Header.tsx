import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header:FC = () => {

    const navigate = useNavigate();

    return (
        <Flex alignItems="center" h={24} justify="center" gap={8} justifyContent="space-between">
            <Flex maxW={120} >
                <Image maxW={24} src="./Images/logo1.png" />
            </Flex>
            <Flex w="90%" alignItems="center">
                <Flex gap={10} display={["none", "none", "flex"]}>
                    <Button onClick={() => {navigate("/")}} boxSize={24} variant="border" fontSize={24}>Home</Button>
                    <Button onClick={() => {navigate("/mint")}} boxSize={24} variant="border" fontSize={24}>Mint</Button>
                    <Button onClick={() => {navigate("/my")}} boxSize={24} variant="border" fontSize={24}>My NFT</Button>
                    <Button onClick={() => {navigate("/market")}} boxSize={24} variant="border" fontSize={24}>Market</Button>
                    <Button onClick={() => {navigate("/game")}} boxSize={24} variant="border" fontSize={24}>Game</Button>
                </Flex>
            </Flex>
            <Flex >
                <Button mr={5} fontSize={20}>로그인</Button>
            </Flex>
        </Flex>
    )
}

export default Header;