import { Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import NftCard from "../components/NftCard";
import Footer from "../components/Footer";

const My:FC = () => {
    const [balanceOf, setBalanceOf] = useState<number>(0);
    const {mintContract, signer, importedNft, setImportedNft} = useOutletContext<any>();
    const [nftMetadataArray, setNftMetadataArray] = useState<nftMetadata[]>([]);
    const [nftMetadataArrayShow, setNftMetadataArrayShow] = useState<nftMetadata[]>([]);
    const [tokenIds, setTokenIds] = useState<number[]>([]);
    const [importedNftNumber, setImportedNftNumber] = useState<number>();

    const getBalanceOf = async () => {
        try {
          const response = await mintContract?.balanceOf(signer?.address);
    
          setBalanceOf(Number(response));
        } catch (error) {
          console.error(error);
        }
      };

    const getNftMetadata = async () => {
        try{
            const temp = [];
            const tokenIdTemp: number[] = [];

            for(let i = 0; i < balanceOf; i++) {
                const tokenOfOwnerByIndex = await mintContract.tokenOfOwnerByIndex(
                    signer.address, i
                )

                const axiosResponse = await axios.get(`${import.meta.env.VITE_METADATA_URI}/${tokenOfOwnerByIndex}.json`)
                temp.push(axiosResponse.data);
                console.log(axiosResponse.data)
                tokenIdTemp.push(Number(tokenOfOwnerByIndex));
            }

            setNftMetadataArray([...nftMetadataArray, ...temp]);
            setTokenIds([...tokenIds, ...tokenIdTemp]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        localStorage.setItem("importedNft", JSON.stringify(importedNft));
        const storedImportedNft = localStorage.getItem("importedNft");
        if (storedImportedNft) {
            const parsedStoredImportedNft = JSON.parse(storedImportedNft)
            const importedNftNumber = parsedStoredImportedNft.length;
            console.log(importedNftNumber);
            setImportedNftNumber(importedNftNumber);
        }
    }, [importedNft]);


    useEffect(() => {
    const storedImportedNft = localStorage.getItem("importedNft");
    if (storedImportedNft) {
        setImportedNft(JSON.parse(storedImportedNft));
    }
    }, []);
    
    useEffect(() => {
        if (!signer || !mintContract) return;

        getBalanceOf()
    }, [mintContract])
    
    useEffect(() => {
        if (!balanceOf) return;

        getNftMetadata()
        const storedImportedNft = localStorage.getItem("importedNft");
        if (storedImportedNft) {
            const parsedStoredImportedNft = JSON.parse(storedImportedNft)
            const importedNftNumber = parsedStoredImportedNft.length;
            console.log(importedNftNumber);
            setImportedNftNumber(importedNftNumber);
        }

    },[balanceOf])

    useEffect(() => {
        if (!nftMetadataArray) return;

        console.log(nftMetadataArray)
        console.log(importedNft)
        const temp = nftMetadataArray.filter((v) => {
            let include = true;

            for (let importNft of importedNft) {
                if (importNft.name == v.name) {
                    include = false;
                }
            }
            return include;
        });
            console.log(temp);
            setNftMetadataArrayShow(temp);
            console.log(importedNft);
    },[nftMetadataArray])

    return (
        <>
        
            {signer ? (
                <Flex justifyContent="center" minH="100vh" pb={40}>
                    <Flex alignItems="center" gap={2} flexDir="column">
                    {balanceOf != 0 ? <Text mb={20} mt={10}> 총 보유 NFT : {balanceOf} / IMPORT NFT : {importedNftNumber}</Text>
                    : <Text mb={20} mt={10}>보유 NFT 갯수 : 0</Text>}
                    
                    <Grid
                        templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        ]}
                        gap={6}
                    >
                    {nftMetadataArrayShow?.map((v,i) => (
                        <NftCard key={i} nftMetadata={v} tokenId={tokenIds[i]} importedNft={importedNft} setImportedNft={setImportedNft} nftMetadataArray={nftMetadataArray} setNftMetadataArray={setNftMetadataArray}/>
                    ))}
                    </Grid>
                    </Flex>
                </Flex>
            ) : 
            (
                <Flex justifyContent="center" alignItems="center" minH="100vh">
                    <Text>🦊 메타마스크 로그인이 필요합니다!</Text>
                </Flex>
            )}
        <Footer/>
        </>
    )
}

export default My;