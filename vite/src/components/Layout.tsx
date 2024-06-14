import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout:FC = () => {
    return (
        <Flex bgColor="red.100" maxW="full" mx="auto" minH="100vh" flexDir="column">
            <Header/>
            <Outlet/>
        </Flex>
    )
}

export default Layout;