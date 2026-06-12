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
    <Box
      w="100%"
      p={{ base: 2, md: 4, lg: 6 }}
    >
      <Header />

      <Box mb={{ base: 5, md: 8 }}>
        <Heading
          color="#173B7A"
          fontSize={{
            base: "24px",
            md: "30px",
            lg: "34px",
          }}
        >
          Statistics
        </Heading>

        <Text
          mt={2}
          color="gray.500"
          fontSize={{
            base: "14px",
            md: "16px",
          }}
        >
          Track your study performance and progress.
        </Text>
      </Box>

      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          lg: 4,
        }}
        spacing={6}
      >
        <Stat
          bg="white"
          p={{ base: 4, md: 6 }}
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
          p={{ base: 4, md: 6 }}
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
          p={{ base: 4, md: 6 }}
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
          p={{ base: 4, md: 6 }}
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
        mt={{ base: 6, md: 8 }}
        bg="white"
        p={{ base: 5, md: 8 }}
        borderRadius="18px"
        boxShadow="sm"
      >
        <Heading
          color="#173B7A"
          fontSize={{
            base: "20px",
            md: "24px",
          }}
          mb={4}
        >
          Overall Progress
        </Heading>

        <Progress
          value={progress}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
        />

        <VStack
          mt={5}
          spacing={2}
        >
          <Text
            fontWeight="bold"
            fontSize={{
              base: "28px",
              md: "36px",
            }}
            color="#173B7A"
          >
            {progress}%
          </Text>

          <Text
            color="gray.500"
            fontSize={{
              base: "14px",
              md: "16px",
            }}
          >
            Study tasks completed
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

