import { Grid, GridItem, Image, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Contract } from "ethers";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MintModal from "./MintModal";

interface MintCardProps {
    mintContract: Contract
    setNftMetadata: any
    nftMetadata: nftMetadata
}

interface mintableImageArray {
    src: string;
    tokenId: number;
}

const MintCard:FC<MintCardProps> = ({ mintContract, nftMetadata ,setNftMetadata }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mintedTokens, setMintedTokens] = useState<number[]>([]);
    const [mintableImageArray, setMintableImageArray] = useState<mintableImageArray[]>([]);

    const onClickMint = async (tokenId:number, setRotate: (rotate: boolean) => void) => {
        try {
            if (!mintContract || !tokenId) return;
            const response = await mintContract.mintNft(tokenId);
            setRotate(true);
            await response.wait();
            console.log(response);

            const axiosResponse = await axios.get(`${import.meta.env.VITE_METADATA_URI}/${tokenId}.json`)
            console.log(axiosResponse.data)
            setRotate(false);
            setNftMetadata(axiosResponse.data);
            setMintedTokens([...mintedTokens, tokenId]);
            const temp = [...mintedTokens, tokenId];
            localStorage.setItem("mintedTokens", JSON.stringify(temp));
            onOpen();
            
        } catch (error) {
            console.error(error);
        }
    }

    const MintableImage = ({ src, tokenId }: { src: string, tokenId: number }) => {
        const [rotate, setRotate] = useState(false);
    
        return (
            <GridItem>
                <motion.div
                    animate={{ rotateY: rotate ? [0, 180, 0, -180, 0] : 0 }}
                    transition={{ duration: 2, repeat: rotate ? Infinity : 0, repeatType: "loop" }}
                >
                    <Image
                        src={src}
                        onClick={() => onClickMint(tokenId, setRotate)}
                        maxH={300}
                        cursor="pointer"
                    />
                </motion.div>
            </GridItem>
        );
    }
    
    const mintableImageList = [
        { src: "./Images/bronze.png", tokenId: 1 },
        { src: "./Images/silver.png", tokenId: 2 },
        { src: "./Images/gold.png", tokenId: 3 },
        { src: "./Images/unique.png", tokenId: 4 }
    ];


    useEffect(() => {
        const filteredImages = mintableImageList.filter((v) => {
            let include = true;
            for (let mintedToken of mintedTokens) {
                if (v.tokenId == mintedToken) {
                    include = false;
                }
            }
            return include;
        });
        console.log(filteredImages);
        setMintableImageArray(filteredImages);
        console.log(mintedTokens)
    },[mintedTokens])

    useEffect(() => {
        const storedMintedTokens = localStorage.getItem("mintedTokens");
        if (storedMintedTokens) {
            setMintedTokens(JSON.parse(storedMintedTokens));
        }
        },[]);
    
    return (
        <>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={6}>
                {mintableImageArray?.map((v) => (
                        <MintableImage key={v.tokenId} src={v.src} tokenId={v.tokenId} />
                    ))}
            </Grid>
            <MintModal 
            isOpen={isOpen}
            onClose={onClose}
            nftMetadata={nftMetadata}
            />
        </>
    )
}

export default MintCard;