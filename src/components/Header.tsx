import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Avatar,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useProfileStore } from "../store/profileStore";

export default function Header() {
  const navigate = useNavigate();

  const { name, email } = useProfileStore();

  return (
    <Box mb={8}>
      <Flex
        align="center"
        bg="white"
        p={5}
        borderRadius="16px"
        boxShadow="sm"
      >
        {/* Left */}

        <Box>
          <Heading
            size="lg"
            color="#173B7A"
          >
            Dashboard
          </Heading>

          <Text
            color="gray.500"
            mt={1}
          >
            Welcome back! Manage your study tasks efficiently.
          </Text>
        </Box>

        <Spacer />

        {/* Profile */}

        <Flex
          align="center"
          cursor="pointer"
          onClick={() => navigate("/settings")}
          _hover={{
            opacity: 0.8,
          }}
        >
          <Avatar
            name={name}
            bg="#2563EB"
            color="white"
            size="sm"
            mr={3}
          />

          <Box>
            <Text
              fontWeight="bold"
              fontSize="14px"
            >
              {name}
            </Text>

            <Text
              fontSize="12px"
              color="gray.500"
            >
              {email}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}