import { VStack } from "@chakra-ui/react";
import Task from  './Task';
import "./TaskList.css";
import { useTransition, animated } from "@react-spring/web";

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  const transitions = useTransition(tasks, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "rotate(0deg)" },
    leave: { opacity: 0, transform: "rotate(10deg)" },
    keys: (task) => task.id,
});





    return (
        <VStack spacing={4} mt={5}>
            {transitions((style, task) => (
                <animated.div style={style} className="task-item">
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        onEdit={onEdit}
                    />
                </animated.div>
            ))}
        </VStack>
    );
};

export default TaskList;
