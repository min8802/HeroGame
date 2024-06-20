import { Flex, Box, Text, Link, Stack, IconButton, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: FC = () => {
    return (
        <Flex
            as="footer"
            minH={[100, 100, 200]}
            bgColor="black"
            color="white"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            py={20}
            px={10}
            
        >
            <Flex
                width="100%"
                flexDirection={["column", "column", "row"]}
                justifyContent="space-between"
                alignItems="flex-start"
                mb={5}
            >
                {/* Company Info */}
                <Box w="50%" mb={[5, 5, 0]}>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>About Hero NFT</Text>
                    <Text>
                        HERR NFT는 디지털 자산의 새로운 시대를 열어가고 있습니다. 우리의 플랫폼에서 특별한 NFT를 발견하고 소유하세요.
                        HERR NFT는 영웅 테마의 NFT 프로젝트로, 각기 다른 속성과 배경, 능력을 지닌 영웅들을 정교하게 제작하여 수집가와 애호가들에게 역동적이고 몰입감 있는 경험을 제공합니다.
                    </Text>
                </Box>

                {/* Quick Links */}
                <Box mb={[5, 5, 0]}>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>Quick Links</Text>
                    <Stack>
                        <Link href="" color="white" _hover={{ textDecoration: "underline" }}>Home</Link>
                        <Link href="" color="white" _hover={{ textDecoration: "underline" }}>About Us</Link>
                        <Link href="" color="white" _hover={{ textDecoration: "underline" }}>Contact Us</Link>
                    </Stack>
                </Box>

                {/* Social Media */}
                <Box mb={[5, 5, 0]}>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>Follow Us</Text>
                    <HStack spacing={4}>
                        <IconButton
                            as="a"
                            href="https://twitter.com/"
                            aria-label="Twitter"
                            icon={<FaTwitter />}
                            colorScheme="twitter"
                        />
                        <IconButton
                            as="a"
                            href="https://instagram.com/"
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            colorScheme="pink"
                        />
                        <IconButton
                            as="a"
                            href="https://facebook.com/"
                            aria-label="Facebook"
                            icon={<FaFacebook />}
                            colorScheme="facebook"
                        />
                    </HStack>
                </Box>

                {/* Legal */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>Legal</Text>
                    <Stack>
                        <Link href="" color="white" _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
                        <Link href="" color="white" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
                    </Stack>
                </Box>
            </Flex>

            <Box textAlign="center" pt={5} borderTop="1px" borderColor="gray.700" width="100%">
                <Text>&copy; 2024 Hero NFT. All rights reserved.</Text>
            </Box>
        </Flex>
    );
}

export default Footer;
