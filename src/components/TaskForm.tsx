import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";

export default function TaskForm() {
  const addTask = useTaskStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<Task["priority"]>("Medium");

  const handleAddTask = () => {
    if (title.trim() === "") return;

    addTask(title, priority);

    setTitle("");
    setPriority("Medium");
  };

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="18px"
      boxShadow="sm"
      mb={8}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="#173B7A"
        mb={5}
      >
        Add New Study Task
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        <Input
          placeholder="Enter study task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          bg="#F8FAFC"
          h="50px"
          borderRadius="12px"
          borderColor="gray.200"
          _focus={{
            borderColor: "#2563EB",
            boxShadow: "0 0 0 1px #2563EB",
          }}
        />

        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as Task["priority"])
          }
          w={{ base: "100%", md: "180px" }}
          h="50px"
          borderRadius="12px"
          bg="#F8FAFC"
        >
          <option value="High"> High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>

        <Button
          bg="#2348FF"
          color="white"
          h="50px"
          px={8}
          borderRadius="12px"
          _hover={{
            bg: "#1D4ED8",
          }}
          onClick={handleAddTask}
        >
          + Add Task
        </Button>
      </Flex>
    </Box>
  );
}