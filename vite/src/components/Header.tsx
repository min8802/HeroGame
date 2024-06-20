import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { ethers } from "ethers";
import { Dispatch, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    signer : JsonRpcSigner | null;
    setSigner : Dispatch<React.SetStateAction<JsonRpcSigner | null>>;
}

const Header:FC<HeaderProps> = ({ signer, setSigner}) => {

    const navigate = useNavigate();
    const onClickMetamask = async () => {
        try {
            await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
            const provider = new ethers.BrowserProvider(window.ethereum);

            setSigner(await provider.getSigner());
            
        } catch (error) {
            console.error(error);
        }
    }

    const onClickLogout = () => {
        setSigner(null);
    }

    useEffect(() => console.log(signer),[signer])

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
                    <Button onClick={() => {navigate("/game")}} boxSize={24} variant="border" fontSize={24}>Game</Button>
                </Flex>
            </Flex>
            <Flex >
                {signer ? 
                <>
                <Flex display={["flex", "flex", "none"]}>
                    <Menu>
                        <MenuButton as={Button} mr={5} fontSize={20}>
                        {signer.address.substring(0,4)}...{signer.address.substring(signer.address.length-4)}
                        </MenuButton>
                        <MenuList>
                        <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                        <MenuItem onClick={() => navigate("/mint")}>Mint</MenuItem>
                        <MenuItem onClick={() => navigate("/my")}>My NFT</MenuItem>
                        <MenuItem onClick={() => navigate("/market")}>Market</MenuItem>
                        <MenuItem onClick={() => navigate("/game")}>Game</MenuItem>
                        <MenuItem onClick={onClickLogout}>로그아웃</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex display={["none", "none", "Flex"]}>
                    <Button mr={5} fontSize={20} onClick={onClickLogout}>로그아웃</Button>
                </Flex>
                </>
                 : 
                <Button mr={5} fontSize={20} onClick={onClickMetamask}>로그인</Button>}
                
            </Flex>
        </Flex>
    )
}

export default Header;