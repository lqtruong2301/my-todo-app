import { Checkbox, IconButton, HStack, Text, useToast } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Task.css";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
    const toast = useToast();

    const handleCheckboxChange = () => {
        onToggle(task.id);
        toast({
            title: "Task Updated",
            description: task.completed
                ? "Task is now marked as incomplete."
                : " Task is now marked as complete.",
            status: task.completed ? "warning" : "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const handleDelete = (id) => {
        onDelete(id);
        toast({
            title: "Task Deleted",
            description: "The task has been successfully deleted.",
            status: "error",
            duration: 2000,
            isClosable: true,
        });
    };
    return (
        <HStack w={465} key={task.id}>
            <Checkbox
                isChecked={task.completed}
                onChange={handleCheckboxChange}
            />
            <Text className="text-task">{task.title}</Text>
            <IconButton
                icon={<FaEdit />}
                colorScheme="green"
                onClick={() => onEdit(task)}
            />
            <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => handleDelete(task.id)}
            />
        </HStack>
    );
};

export default Task;
