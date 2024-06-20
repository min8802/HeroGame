import {GridItem,Image,Button, Flex, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure} from "@chakra-ui/react";
import { Dispatch, FC, useState } from "react";

  
  interface NftCardProps {
    nftMetadata: nftMetadata;
    tokenId: number;
    setImportedNft: Dispatch<React.SetStateAction<nftMetadata[]>>;
    nftMetadataArray : nftMetadata[];
    setNftMetadataArray: Dispatch<React.SetStateAction<nftMetadata[]>>
    importedNft : nftMetadata[]
  }

  const NftCard: FC<NftCardProps> = ({ nftMetadata, setImportedNft, setNftMetadataArray, nftMetadataArray, importedNft }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [confirmMetadata, setConfirmMetadata] = useState<nftMetadata|null>();

    const ConfirmModal = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
      return (
        <Modal isOpen={isOpen} onClose={() => { setConfirmMetadata(null); onClose(); }}>
          <ModalOverlay />
          <ModalContent>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  GAME IMPORT 하시겠습니까?
              </ModalBody>
              <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onConfirm}>
                      확인
                  </Button>
                  <Button variant="ghost" onClick={onClose}>취소</Button>
              </ModalFooter>
          </ModalContent>
        </Modal>
      );
    }

    const nftImportClick = (nftMetadata:nftMetadata) => {
      
      setConfirmMetadata(nftMetadata);
      onOpen();
    }

    const clickConfirm = () => {
      if (!confirmMetadata) return;
      onClickNftImport(confirmMetadata);
    }

    const onClickNftImport  = (nftMetadata:nftMetadata) => {
      const temp = nftMetadataArray.filter((v) => {
        if (v !== nftMetadata) {
          return v;
        }
      })

      const temp1 = nftMetadataArray.filter((v) => {
        if (v == nftMetadata) {
          return v;
        }
      })

      console.log(temp);
      setNftMetadataArray(temp);
      setImportedNft([...importedNft, ...temp1]);
      onClose()
    }

    return (
      <GridItem display="flex" flexDir="column">
        <Image
          alignSelf="center"
          src={nftMetadata.image}
          alt={nftMetadata.name}
          h={400}
        />
        <Button mt={4} fontSize={24} fontWeight="semibold" variant="link" color="gray.800">
              {nftMetadata.name}
        </Button>
        <Flex flexWrap="wrap" mt={4} gap={2} justifyContent="center" >
          {nftMetadata.attributes?.map((w, j) => (
            <Box key={j} border="2px solid olive" p={1}>
              <Text borderBottom="2px solid olive">{w.trait_type}</Text>
              <Text>{w.value}</Text>
            </Box>
          ))}
        </Flex>
        <Button mt={4} colorScheme="teal" onClick={() => nftImportClick(nftMetadata)}>
          GAME IMPORT
        </Button>
        <ConfirmModal isOpen={isOpen} onClose={onClose} onConfirm={clickConfirm} />
      </GridItem>
    );
  };
  
  export default NftCard;