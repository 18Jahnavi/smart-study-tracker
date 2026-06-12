
import {
  Box,
  Flex,
  Text,
  Badge,
  Checkbox,
  IconButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import {
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

import { useRef } from "react";

import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({
  task,
}: TaskCardProps) {
  const toggleTask = useTaskStore(
    (state) => state.toggleTask
  );

  const deleteTask = useTaskStore(
    (state) => state.deleteTask
  );

  const editTask = useTaskStore(
    (state: any) => state.editTask
  );

  const { isOpen, onOpen, onClose } =
    useDisclosure();

  const cancelRef =
    useRef<HTMLButtonElement>(null);

  const getColor = () => {
    switch (task.priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <>
      <Box
        bg="white"
        p={{ base: 4, md: 5 }}
        borderRadius="16px"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.200"
        transition="0.3s"
        _hover={{
          boxShadow: "lg",
          transform: "translateY(-2px)",
        }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Flex
            align="center"
            flex="1"
            w="100%"
          >
            <Checkbox
              isChecked={task.completed}
              onChange={() =>
                toggleTask(task.id)
              }
              colorScheme="blue"
              mr={4}
            />

            <Box flex="1">
              <Text
                fontWeight="600"
                fontSize={{
                  base: "15px",
                  md: "16px",
                }}
                textDecoration={
                  task.completed
                    ? "line-through"
                    : "none"
                }
                color={
                  task.completed
                    ? "gray.400"
                    : "#173B7A"
                }
              >
                {task.title}
              </Text>

              <Badge
                mt={2}
                colorScheme={getColor()}
                px={3}
                py={1}
                borderRadius="full"
              >
                {task.priority}
              </Badge>
            </Box>
          </Flex>

          <Flex
            gap={2}
            w={{ base: "100%", md: "auto" }}
            justify={{
              base: "flex-end",
              md: "flex-start",
            }}
          >
            <IconButton
              aria-label="Edit Task"
              icon={<EditIcon />}
              colorScheme="blue"
              variant="ghost"
              onClick={() => {
                const newTitle = prompt(
                  "Edit Task",
                  task.title
                );

                if (
                  newTitle &&
                  newTitle.trim() !== ""
                ) {
                  editTask(
                    task.id,
                    newTitle
                  );
                }
              }}
            />

            <IconButton
              aria-label="Delete Task"
              icon={<DeleteIcon />}
              colorScheme="red"
              variant="ghost"
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent mx={4}>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
            >
              Delete Task
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to
              delete this task?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
              >
                No
              </Button>

              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  deleteTask(task.id);
                  onClose();
                }}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

