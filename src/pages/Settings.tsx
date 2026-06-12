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
      p={8}
      borderRadius="16px"
      boxShadow="sm"
    >
      <Heading
        size="lg"
        mb={6}
        color="#173B7A"
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
          >
            Name
          </Text>

          <Input
            value={newName}
            onChange={(e) =>
              setNewName(e.target.value)
            }
            placeholder="Enter your name"
          />
        </Box>

        <Box>
          <Text
            mb={2}
            fontWeight="600"
          >
            Email
          </Text>

          <Input
            value={newEmail}
            onChange={(e) =>
              setNewEmail(e.target.value)
            }
            placeholder="Enter your email"
          />
        </Box>

        <Button
          colorScheme="blue"
          w="180px"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
}