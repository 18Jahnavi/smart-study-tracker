import { VStack, Box, Text } from "@chakra-ui/react";

import { useTaskStore } from "../store/taskStore";
import TaskCard from "./TaskCard";

interface TaskListProps {
  search: string;
}

export default function TaskList({
  search,
}: TaskListProps) {
  const tasks = useTaskStore((state) => state.tasks);

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box mt={6}>
      {filteredTasks.length === 0 ? (
        <Box
          bg="white"
          p={12}
          borderRadius="20px"
          textAlign="center"
          boxShadow="sm"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.600"
          >
             No Study Tasks Found
          </Text>

          <Text
            mt={3}
            color="gray.500"
          >
            Add your first study task to get started.
          </Text>
        </Box>
      ) : (
        <VStack
          spacing={5}
          align="stretch"
        >
          {filteredTasks.map((task) => (
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