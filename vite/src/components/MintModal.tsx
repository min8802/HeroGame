import {
    Box,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";
  import { FC } from "react";
  
  interface MintModalProps {
    isOpen: boolean;
    onClose: () => void;
    nftMetadata: nftMetadata | undefined;
  }
  
  const MintModal: FC<MintModalProps> = ({ isOpen, onClose, nftMetadata }) => {
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hero</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
          <Box>
            <Image
              src={nftMetadata?.image}
              alt={nftMetadata?.name}
              h={400}
            />
          </Box>
            <Text fontSize={[18,18,24]} fontWeight="semibold">{nftMetadata?.name}</Text>
            <Text fontSize={[16,16,20]}>{nftMetadata?.description}</Text>
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default MintModal;