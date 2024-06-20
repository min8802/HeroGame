import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { JsonRpcSigner } from "ethers";
import { Contract } from "ethers";
import abi from "../abi.json"



const Layout:FC = () => {
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [mintContract, setMintContract] = useState<Contract | null>(null);
    const [nftMetadata, setNftMetadata] = useState<nftMetadata>();
    const [importedNft, setImportedNft] = useState<nftMetadata[]>([]);

    useEffect(() => {
        const contract = new Contract("0x6fB9f6dDA32031701C967B51857e70f969686115", abi, signer)
            setMintContract(contract);
    },[signer])

    useEffect(() => console.log(mintContract),[signer])


    return (
        <Flex  maxW="full" mx="auto" minH="100vh" flexDir="column">
            <Header signer={signer} setSigner={setSigner}/>
            <Outlet context={{ signer, mintContract, nftMetadata, setNftMetadata, importedNft, setImportedNft }}/>
        </Flex>
    )
}

export default Layout;