
import { Box, Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import AllTasks from "./pages/AllTasks";
import Completed from "./pages/Completed";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Flex
      bg="#F4F7FB"
      minH="100vh"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        flex="1"
        ml={{
          base: 0,
          md: "250px",
        }}
        p={{
          base: 4,
          md: 8,
        }}
        w="100%"
      >
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/all-tasks"
            element={<AllTasks />}
          />

          <Route
            path="/completed"
            element={<Completed />}
          />

          <Route
            path="/statistics"
            element={<Statistics />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;

