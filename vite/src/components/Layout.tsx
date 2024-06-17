import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Element, scroller } from "react-scroll";

const Layout:FC = () => {
    
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useEffect(() => {
        
        const handleScroll = (e: WheelEvent) => {
            if (isScrolling) return;
            if (e.deltaY > 0) {
                setCurrentSection(currentSection > 2 ? 3 : currentSection + 1)
            } else {
                setCurrentSection(currentSection > 0 ? currentSection - 1 : 1)
            }
            console.log(e);
        }

        window.addEventListener('wheel', handleScroll);
        
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [isScrolling])

    useEffect(() => {
        if (isScrolling) return;

        setIsScrolling(true);

        scroller.scrollTo(`section${currentSection}`,
            {
                duration:1000,
                delay:0,
                smooth: "easeInOutQuart",
            }
        )
        const timer = setTimeout(() => {setIsScrolling(false)}, 1000);
        return () => clearTimeout(timer);
        
    }, [currentSection])

    useEffect(() => console.log(currentSection), [currentSection])
    useEffect(() => console.log(isScrolling), [isScrolling])
    
    return (
        <Flex  maxW="full" mx="auto" minH="100vh" flexDir="column">
            <Element name="section0">
                <Header/>
            </Element>
            <Outlet />
        </Flex>
    )
}

export default Layout;