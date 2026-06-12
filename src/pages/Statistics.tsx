import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  VStack,
} from "@chakra-ui/react";

import Header from "../components/Header";
import { useTaskStore } from "../store/taskStore";

export default function Statistics() {
  const tasks = useTaskStore((state) => state.tasks);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <Box>
      <Header />

      <Box mb={8}>
        <Heading
          size="lg"
          color="#173B7A"
        >
          Statistics
        </Heading>

        <Text
          mt={2}
          color="gray.500"
        >
          Track your study performance and progress.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
      >
        <Stat
          bg="white"
          p={6}
          borderRadius="18px"
          boxShadow="sm"
        >
          <StatLabel>Total Tasks</StatLabel>

          <StatNumber color="#2563EB">
            {totalTasks}
          </StatNumber>
        </Stat>

        <Stat
          bg="white"
          p={6}
          borderRadius="18px"
          boxShadow="sm"
        >
          <StatLabel>Completed</StatLabel>

          <StatNumber color="green.500">
            {completedTasks}
          </StatNumber>
        </Stat>

        <Stat
          bg="white"
          p={6}
          borderRadius="18px"
          boxShadow="sm"
        >
          <StatLabel>Pending</StatLabel>

          <StatNumber color="orange.500">
            {pendingTasks}
          </StatNumber>
        </Stat>

        <Stat
          bg="white"
          p={6}
          borderRadius="18px"
          boxShadow="sm"
        >
          <StatLabel>High Priority</StatLabel>

          <StatNumber color="red.500">
            {highPriority}
          </StatNumber>
        </Stat>
      </SimpleGrid>

      <Box
        mt={8}
        bg="white"
        p={8}
        borderRadius="18px"
        boxShadow="sm"
      >
        <Heading
          size="md"
          mb={4}
          color="#173B7A"
        >
          Overall Progress
        </Heading>

        <Progress
          value={progress}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
        />

        <VStack mt={5} spacing={2}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            color="#173B7A"
          >
            {progress}%
          </Text>

          <Text color="gray.500">
            Study tasks completed
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}