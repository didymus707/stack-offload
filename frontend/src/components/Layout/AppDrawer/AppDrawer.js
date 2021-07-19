import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Link,
  DrawerHeader,
  Icon,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
  Input,
  Button,
  Heading,
  Stack,
  Box,
} from "@chakra-ui/react";
import Logo from "assets/logo.png";
import "./styles.css";
import { Link as ReactRouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdDashboard, MdPeople, MdLabel, MdSettings } from "react-icons/md";

const menuItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    to: "/dashboard",
  },
  {
    name: "Communities",
    icon: MdPeople,
    to: "/communities",
  },
  {
    name: "Topics",
    icon: MdLabel,
    to: "/topics",
  },
  {
    name: "Settings",
    icon: MdSettings,
    to: "/settings",
  },
];

const AppDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon
        w={6}
        onClick={onOpen}
        ref={btnRef}
        h={6}
        style={{ cursor: "pointer" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        id="app-drawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody style={{ padding: 0 }}>
            {menuItems.map((menuItem) => (
              <Link
                as={ReactRouterLink}
                to={menuItem.to}
                style={{ textDecoration: "none" }}
                key={menuItem.name}
              >
                <Box w="100%" h="10vh" className="drawer-menu-item">
                  <Icon
                    as={menuItem.icon}
                    w={8}
                    h={8}
                    color="purple"
                    style={{ marginRight: "7%" }}
                  />
                  <p>{menuItem.name}</p>
                </Box>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppDrawer;
