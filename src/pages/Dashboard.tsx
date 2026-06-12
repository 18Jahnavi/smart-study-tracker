import { Box } from "@chakra-ui/react";
import { useState } from "react";

import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Statistics Cards */}
      <StatsCards />

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Add Task Form */}
      <TaskForm />

      {/* Task List */}
      <TaskList search={search} />
    </Box>
  );
}