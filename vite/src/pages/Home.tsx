import { Flex } from "@chakra-ui/react";
import { FC} from "react";
import Home_C from "../components/Home_C";
import Home_A from "../components/Home_A";
import Home_B from "../components/Home_B";



const Home:FC = () => {

    return (
        <Flex minH="100vh" flexDir="column">
            <Home_A/>
            <Home_B/>
            <Home_C/>
        </Flex>
    )
}

export default Home;