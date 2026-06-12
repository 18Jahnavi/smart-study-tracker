import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

import { useTaskStore } from "../store/taskStore";

export default function Completed() {
  const tasks = useTaskStore((state) => state.tasks);

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

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
          Completed Tasks
        </Heading>

        <Text
          mt={1}
          color="gray.500"
          fontSize={{
            base: "14px",
            md: "16px",
          }}
        >
          Review all the study tasks you have completed.
        </Text>
      </Box>

      {/* Completed Tasks List */}
      {completedTasks.length === 0 ? (
        <Box
          bg="white"
          p={{ base: 6, md: 12 }}
          borderRadius="20px"
          textAlign="center"
          boxShadow="sm"
        >
          <Heading
            fontSize={{
              base: "20px",
              md: "24px",
            }}
            color="gray.700"
          >
            No Completed Tasks
          </Heading>

          <Text
            mt={2}
            color="gray.500"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            Complete a study task to see it here.
          </Text>
        </Box>
      ) : (
        <VStack
          spacing={{ base: 3, md: 4 }}
          align="stretch"
        >
          {completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </VStack>
      )}
    </Box>
  );
}