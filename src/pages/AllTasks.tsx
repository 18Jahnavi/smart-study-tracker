import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function AllTasks() {
  const [search, setSearch] = useState("");

  return (
    <Box
      w="100%"
      p={{ base: 2, md: 4, lg: 6 }}
    >
      {/* Header */}
      <Header />

      {/* Page Title */}
      <Box mb={{ base: 4, md: 6 }}>
        <Heading
          fontSize={{
            base: "24px",
            md: "30px",
            lg: "34px",
          }}
          color="#173B7A"
        >
          All Tasks
        </Heading>

        <Text
          color="gray.500"
          mt={1}
          fontSize={{
            base: "14px",
            md: "16px",
          }}
        >
          View, search, and manage all your study tasks.
        </Text>
      </Box>

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Add Task */}
      <TaskForm />

      {/* Task List */}
      <TaskList search={search} />
    </Box>
  );
}