import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Text,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    VStack
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const pages = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/creators", name: "Creators" },
    { id: 3, to: "/profile", name: "Profile" },
];

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleNavLinkClick = (to) => {
        navigate(to);
        onClose();
    };

    const navLinkSize = useBreakpointValue({ base: "14px", md: "16px", lg: "18px" });
    const logoFontSize = useBreakpointValue({ base: "20px", md: "24px", lg: "28px" });
    const rrrFontSize = useBreakpointValue({ base: "24px", md: "30px", lg: "36px" });

    return (
        <>
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                p={{ base: 2, md: 3 }}
                boxShadow={"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}
                display={{ base: "flex", md: "none" }}
            >
                <HStack spacing={1} onClick={handleLogoClick} cursor="pointer">
                    <Text
                        fontFamily="'Poppins', sans-serif"
                        color="grey"
                        fontWeight="bold"
                        fontSize={logoFontSize}
                        letterSpacing="1px"
                    >
                        Creato
                    </Text>
                    <Text
                        fontFamily="'Poppins', sans-serif"
                        color="#FF5733"
                        fontWeight="extrabold"
                        fontSize={rrrFontSize}
                        letterSpacing="2px"
                        lineHeight="1"
                    >
                        RRR
                    </Text>
                </HStack>
                <Button onClick={onOpen} variant="outline">
                    <HamburgerIcon />
                </Button>
                <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <HStack spacing={1} onClick={handleLogoClick} cursor="pointer">
                                <Text
                                    fontFamily="'Poppins', sans-serif"
                                    color="grey"
                                    fontWeight="bold"
                                    fontSize={logoFontSize}
                                    letterSpacing="1px"
                                >
                                    Creato
                                </Text>
                                <Text
                                    fontFamily="'Poppins', sans-serif"
                                    color="#FF5733"
                                    fontWeight="extrabold"
                                    fontSize={rrrFontSize}
                                    letterSpacing="2px"
                                    lineHeight="1"
                                >
                                    RRR
                                </Text>
                            </HStack>
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4} align="start">
                                {pages.map((el) => (
                                    <NavLink
                                        key={el.id}
                                        to={el.to}
                                        onClick={() => handleNavLinkClick(el.to)}
                                        style={{
                                            fontSize: navLinkSize,
                                            fontWeight: "600",
                                            textDecoration: "none",
                                            color: "inherit"
                                        }}
                                    >
                                        {el.name}
                                    </NavLink>
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>

            <Flex
                display={{ base: "none", md: "flex" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={{ base: 2, md: 3 }}
                boxShadow={"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}
            >
                <HStack spacing={1} onClick={handleLogoClick} cursor="pointer">
                    <Text
                        fontFamily="'Poppins', sans-serif"
                        color="grey"
                        fontWeight="bold"
                        fontSize={logoFontSize}
                        letterSpacing="1px"
                    >
                        Creato
                    </Text>
                    <Text
                        fontFamily="'Poppins', sans-serif"
                        color="#FF5733"
                        fontWeight="extrabold"
                        fontSize={rrrFontSize}
                        letterSpacing="2px"
                        lineHeight="1"
                    >
                        RRR
                    </Text>
                </HStack>
                <Flex
                    alignItems={"center"}
                    gap={{ base: 2, md: 4, lg: 6 }}
                >
                    {pages.map((el) => (
                        <NavLink
                            key={el.id}
                            to={el.to}
                            style={{
                                fontSize: navLinkSize,
                                fontWeight: "600",
                                textDecoration: "none",
                                color: "inherit",
                                padding: "0 12px"
                            }}
                        >
                            {el.name}
                        </NavLink>
                    ))}
                </Flex>
                <Button onClick={toggleColorMode} size={{ base: "sm", md: "md", lg: "lg" }}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
        </>
    );
}

export default Navbar;
