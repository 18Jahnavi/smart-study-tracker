import { useState } from "react";

import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useProfileStore } from "../store/profileStore";

export default function Settings() {
  const {
    name,
    email,
    updateProfile,
  } = useProfileStore();

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (
      newName.trim() === "" ||
      newEmail.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    updateProfile(newName, newEmail);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <Box
      bg="white"
      w="100%"
      maxW={{
        base: "100%",
        md: "700px",
      }}
      mx="auto"
      p={{
        base: 4,
        md: 8,
      }}
      borderRadius="16px"
      boxShadow="sm"
    >
      <Heading
        color="#173B7A"
        mb={6}
        fontSize={{
          base: "24px",
          md: "32px",
        }}
      >
        Profile Information
      </Heading>

      {saved && (
        <Alert
          status="success"
          mb={5}
          borderRadius="8px"
        >
          <AlertIcon />
          Profile updated successfully!
        </Alert>
      )}

      <Stack spacing={5}>
        <Box>
          <Text
            mb={2}
            fontWeight="600"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            Name
          </Text>

          <Input
            value={newName}
            onChange={(e) =>
              setNewName(e.target.value)
            }
            placeholder="Enter your name"
            size="lg"
          />
        </Box>

        <Box>
          <Text
            mb={2}
            fontWeight="600"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            Email
          </Text>

          <Input
            value={newEmail}
            onChange={(e) =>
              setNewEmail(e.target.value)
            }
            placeholder="Enter your email"
            size="lg"
          />
        </Box>

        <Button
          colorScheme="blue"
          w={{
            base: "100%",
            md: "180px",
          }}
          size="lg"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
}