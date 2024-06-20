import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import MintCard from "../components/MintCard";
import { useOutletContext } from "react-router-dom";
import Footer from "../components/Footer";

const Mint:FC = () => {
    
    const { mintContract, nftMetadata, setNftMetadata, signer } = useOutletContext<any>();

    return (
        <>
        {signer? (<>
            <Flex pos="relative" display={["none", "none", "flex"]} minH="100vh" flexDir="column" >
           
           <Image src="./Images/mintbg1.webp" minH="100vh" />
           <Flex pos="absolute" left="0" top="45%" w="full" justifyContent="center">
               <MintCard mintContract={mintContract} setNftMetadata={setNftMetadata} nftMetadata={nftMetadata}/>
           </Flex>

       </Flex>
       <Flex display={["flex", "flex", "none"]} minH="100vh" flexDir="column">
           <Image src="./Images/mintbg2.webp" minH="100vh"/>
       </Flex></>) : (
            <Flex justifyContent="center" alignItems="center" minH="100vh">
                <Text>🦊 메타마스크 로그인이 필요합니다!</Text>
            </Flex>
       )}
        
        <Footer/>
        </>
    )
}

export default Mint;