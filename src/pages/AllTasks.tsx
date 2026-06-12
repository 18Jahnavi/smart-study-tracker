import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function AllTasks() {
  const [search, setSearch] = useState("");

  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Page Title */}
      <Box mb={6}>
        <Heading
          size="lg"
          color="#173B7A"
        >
          All Tasks
        </Heading>

        <Text
          color="gray.500"
          mt={1}
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