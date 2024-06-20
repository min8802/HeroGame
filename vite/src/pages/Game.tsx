import { Flex, Box, Button, Text, Image, Grid } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import monsterImage from "/Images/monster.webp"; // 몬스터 이미지를 프로젝트에 추가하고 경로를 수정하세요.
import GameCard from "../components/GameCard";
import { useOutletContext } from "react-router-dom";
import Footer from "../components/Footer";

const Game: FC = () => {
    const [monsterHealth, setMonsterHealth] = useState<number>(100);
    const [gameImportedNft, setGameImportedNft] = useState<nftMetadata[]>();
    const {signer} = useOutletContext<any>();

    const attackMonster = () => {
        setMonsterHealth((prevHealth) => Math.max(prevHealth - 10, 0));
    };

    const resetGame = () => {
        setMonsterHealth(100);
    };

    useEffect(() => {
        const storedImportedNft = localStorage.getItem("importedNft");
        if (storedImportedNft) {
            setGameImportedNft(JSON.parse(storedImportedNft));
        }
        console.log(gameImportedNft)
        }, []);

    return (
        <>
        <Flex alignItems="center" justifyContent="center" minH="100vh" bg="gray.800" color="white" p={5} gap={40}>
            {signer ? (<>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}>
                    {gameImportedNft?.map((v,i) => <GameCard key={i} nftMetadata={v}/>)}
                </Grid>
                <Flex flexDir="column" alignItems="center">    
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>Monster Slayer</Text>
                    <Box mb={4}>
                        <Image src={monsterImage} alt="Monster" boxSize="180px" mb={4} />
                        <Text fontSize="xl">Monster Health: {monsterHealth}</Text>
                    </Box>
                    <Flex gap={4}>
                        <Button colorScheme="red" onClick={attackMonster} isDisabled={monsterHealth === 0}>
                            Attack Monster
                        </Button>
                        <Button colorScheme="blue" onClick={resetGame} isDisabled={monsterHealth === 100}>
                            Reset Game
                        </Button>
                    </Flex>
                </Flex>
            

            {monsterHealth === 0 && <Text mt={4} fontSize="xl" color="green.300">You've slain the monster!</Text>}
            </>) : (
                <Text>🦊 메타마스크 로그인이 필요합니다!</Text>
            )}
            
        </Flex>
        <Footer/>
        </>
    );
};

export default Game;
