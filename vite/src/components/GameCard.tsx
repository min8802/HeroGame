import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import HeroModal from "./HeroModal";

interface GameCardProps {
    nftMetadata: nftMetadata;
}

const GameCard: FC<GameCardProps> = ({ nftMetadata }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const checkAttribute = () => {
        onOpen()
    }

    return (
        <>
      <Flex direction="column" alignItems="center" bg="gray.700" p={4} borderRadius="md" boxShadow="lg" maxW="340px" m={4} mt={20}>
        <Image src={nftMetadata.image} alt={nftMetadata.name} borderRadius="md" mb={4} h={180} w={150} onClick={checkAttribute} style={{cursor:"pointer"}}/>
        <Text fontSize="xl" fontWeight="bold" mb={2}>{nftMetadata.name}</Text>
      </Flex>
      <HeroModal isOpen={isOpen} onClose={onClose} nftMetadata={nftMetadata}/>
      </>
    );
  };
  
  export default GameCard;