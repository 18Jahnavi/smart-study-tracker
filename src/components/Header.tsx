
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
    <Box mb={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        bg="white"
        p={{ base: 4, md: 5 }}
        borderRadius="16px"
        boxShadow="sm"
      >
        {/* Left */}

        <Box>
          <Heading
            color="#173B7A"
            fontSize={{
              base: "24px",
              md: "32px",
            }}
          >
            Dashboard
          </Heading>

          <Text
            color="gray.500"
            mt={1}
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            Welcome back! Manage your study tasks efficiently.
          </Text>
        </Box>

        <Spacer display={{ base: "none", md: "block" }} />

        {/* Profile */}

        <Flex
          mt={{ base: 4, md: 0 }}
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
            size={{
              base: "sm",
              md: "md",
            }}
            mr={3}
          />

          <Box>
            <Text
              fontWeight="bold"
              fontSize={{
                base: "14px",
                md: "16px",
              }}
            >
              {name}
            </Text>

            <Text
              color="gray.500"
              fontSize={{
                base: "12px",
                md: "14px",
              }}
            >
              {email}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

