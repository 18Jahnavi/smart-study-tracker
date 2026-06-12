import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";

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
  return (
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
      {/* Logo */}

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

      {/* Menu */}

      <VStack spacing={3} align="stretch">
        {menuItems.map((item) => (
          <NavLink
  key={item.path}
  to={item.path}
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
            {({ isActive }) => (
              <Flex
                align="center"
                p={4}
                borderRadius="12px"
                bg={isActive ? "#2348FF" : "transparent"}
                _hover={{
                  bg: "#E2E8F0",
                  color: "#1A202C",
                }}
                transition="0.2s ease"
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
  fontWeight="400"
>
  {item.name}
</Text>
              </Flex>
            )}
          </NavLink>
        ))}
      </VStack>

      

      
    </Box>
  );
}