import {
    Box,
    Button,
    Flex,
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

const HeroModal: FC<MintModalProps> = ({ isOpen, onClose, nftMetadata }) => {
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hero</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center">
          <Flex gap={5} alignItems="flex-start" w="100%" justifyContent="center">
          {nftMetadata?.attributes?.map((attr, index) => (
            <Box key={index} mb={2} borderBottom="1px" borderColor="gray.600" pb={1}>
              <Text fontSize="sm" fontWeight="semibold">{attr.trait_type}</Text>
              <Text fontSize="sm">{attr.value}</Text>
            </Box>
          ))}
          </Flex>
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
  
  export default HeroModal;