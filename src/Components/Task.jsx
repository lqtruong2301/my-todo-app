import { Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Task.css";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <HStack w={465} key={task.id}>
      <Checkbox isChecked={task.completed} onChange={() => onToggle(task.id)} />
      <Text className="text-task">
        {task.title}
      </Text>
      <IconButton icon={<FaEdit />} colorScheme="green" onClick={() => onEdit(task)} />
      <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => onDelete(task.id)} />
    </HStack>
  );
};

export default Task;
