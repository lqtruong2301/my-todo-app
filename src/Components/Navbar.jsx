// src/components/Navbar.jsx
import React from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaCog } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { i18n, t } = useTranslation();
    const logoColor = useColorModeValue("blue");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Box py={2}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontWeight="bold" className="text-logo">
                    {t("To-Do App")}
                </Text>
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            className="setting-btn"
                            border={"none"}
                            top={3}
                            fontSize={26}
                            as={IconButton}
                            aria-label="Options"
                            icon={<FaCog />}
                            variant="none"
                        />
                        <MenuList>
                            <MenuItem
                                onClick={toggleColorMode}
                                paddingLeft={10}
                            >
                                {colorMode === "light" ? (
                                    <>
                                        <FaMoon
                                            style={{ marginRight: "8px" }}
                                        />{" "}
                                        {t("Dark Mode")}
                                    </>
                                ) : (
                                    <>
                                        <FaSun style={{ marginRight: "8px" }} />{" "}
                                        {t("Light Mode")}
                                    </>
                                )}
                            </MenuItem>
                                
                                <MenuItem paddingLeft={16} onClick={() => changeLanguage("en")}>
                                {t("English")}
                            </MenuItem>
                            <MenuItem paddingLeft={16} onClick={() => changeLanguage("vi")}>
                                {t("Vietnamese")}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
