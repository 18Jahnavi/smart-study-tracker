
import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Show,
  Hide,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiBookOpen,
  FiCheckCircle,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    icon: FiHome,
    path: "/",
  },
  {
    name: "All Tasks",
    icon: FiBookOpen,
    path: "/all-tasks",
  },
  {
    name: "Completed",
    icon: FiCheckCircle,
    path: "/completed",
  },
  {
    name: "Statistics",
    icon: FiBarChart2,
    path: "/statistics",
  },
  {
    name: "Settings",
    icon: FiSettings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } =
    useDisclosure();

  const Menu = () => (
    <>
      <Box mb={12}>
        <Text
          mt={3}
          textAlign="center"
          fontSize="22px"
          fontWeight="700"
        >
          Smart Study
        </Text>

        <Text
          textAlign="center"
          color="gray.300"
          fontSize="14px"
        >
          Task Tracker
        </Text>
      </Box>

      <VStack spacing={3} align="stretch">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={onClose}
          >
            {({ isActive }) => (
              <Flex
                align="center"
                p={4}
                borderRadius="12px"
                bg={
                  isActive
                    ? "#2348FF"
                    : "transparent"
                }
                _hover={{
                  bg: "#E2E8F0",
                  color: "#1A202C",
                }}
                cursor="pointer"
              >
                <Icon
                  as={item.icon}
                  boxSize={5}
                />

                <Text
                  ml={4}
                  fontSize="16px"
                  fontFamily="Heloni Regular"
                >
                  {item.name}
                </Text>
              </Flex>
            )}
          </NavLink>
        ))}
      </VStack>
    </>
  );

  return (
    <>
      <Show below="md">
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          position="fixed"
          top={4}
          left={4}
          zIndex={1000}
          onClick={onOpen}
        />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay />

          <DrawerContent bg="#1A202C" color="white">
            <DrawerBody pt={8}>
              <Menu />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>

      <Hide below="md">
        <Box
          position="fixed"
          left={0}
          top={0}
          w="260px"
          h="100vh"
          bg="#1A202C"
          color="white"
          px={6}
          py={8}
          boxShadow="lg"
        >
          <Menu />
        </Box>
      </Hide>
    </>
  );
}

