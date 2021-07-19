import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Image,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "assets/logo.png";
import AppDrawer from "./AppDrawer/AppDrawer";
import { HamburgerIcon, BellIcon, CloseIcon } from "@chakra-ui/icons";

const AuthLayout = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuth, setAuth] = useState(true);
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const [notifications, setNotifications] = useState([]);

  const handleLogout = () => {};

  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={3}
        bg="purple"
        color="white"
        {...props}
      >
        <Flex align="center" mr={5}>
          {isAuth && <AppDrawer />}
          {!isAuth && (
            <Image
              src={Logo}
              alt="Stack Offload"
              htmlHeight={20}
              htmlWidth={20}
            />
          )}
          <Heading
            as="h6"
            size="md"
            style={{ letterSpacing: "5px", marginLeft: "10px" }}
          >
            Stack Offload
          </Heading>
        </Flex>

        <Box
          display={{ base: "block", md: "none" }}
          style={{ cursor: "pointer" }}
          onClick={handleToggle}
        >
          {isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={7} h={7} />}
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        ></Stack>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          {isAuth && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: "7vw",
              }}
            >
              <Menu placement="bottom-start">
                <MenuButton>
                  <BellIcon w={8} h={8} style={{ cursor: "pointer" }} />
                </MenuButton>
                <MenuList>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <MenuItem style={{ color: "black" }}>
                        {notification}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem style={{ color: "black" }}>
                      No new notifications
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>

              <Menu placement="bottom-start">
                <MenuButton>
                  <Avatar
                    size="sm"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem style={{ color: "black" }} onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          )}
          {!isAuth && <Button color="black">Authenticate</Button>}
        </Box>
      </Flex>
      {props.children}
    </div>
  );
};

export default AuthLayout;
