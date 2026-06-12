import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Progress,
} from "@chakra-ui/react";

import { useTaskStore } from "../store/taskStore";

export default function StatsCards() {
  const tasks = useTaskStore((state) => state.tasks);

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const stats = [
    {
      title: "Total Tasks",
      value: total,
      color: "#2563EB",
    },
    {
      title: "Completed",
      value: completed,
      color: "#22C55E",
    },
    {
      title: "Pending",
      value: pending,
      color: "#F59E0B",
    },
    {
      title: "Progress",
      value: `${progress}%`,
      color: "#7C3AED",
    },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacing={6}
      mb={8}
    >
      {stats.map((card) => (
        <Box
          key={card.title}
          bg="white"
          p={6}
          borderRadius="18px"
          boxShadow="sm"
          borderTop="5px solid"
          borderColor={card.color}
          transition="0.3s"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow: "lg",
          }}
        >
          <Text
            color="gray.500"
            fontSize="sm"
            mb={2}
          >
            {card.title}
          </Text>

          <Heading
            size="lg"
            color={card.color}
          >
            {card.value}
          </Heading>

          {card.title === "Progress" && (
            <Progress
              value={progress}
              mt={4}
              colorScheme="purple"
              borderRadius="full"
              size="sm"
            />
          )}
        </Box>
      ))}
    </SimpleGrid>
  );
}