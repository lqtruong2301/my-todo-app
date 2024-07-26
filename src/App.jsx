// src/App.jsx
import React, { useEffect, useState } from "react";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../src/api/api";
import TaskForm from "../src/Components/TaskForm";
import TaskList from "../src/Components/TaskList";
import Navbar from "../src/Components/Navbar";
import "../src/i18n/i18n";
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const tasksFromServer = await fetchTasks();
                setTasks(tasksFromServer);
            } catch (error) {
                console.error("Error fetching tasks in App component:", error);
            }
        };

        getTasks();
    }, []);

    const addTask = async (title) => {
        const newTask = { title, completed: false };
        try {
            const savedTask = await createTask(newTask);
            setTasks([...tasks, savedTask]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const editTask = async (id, title) => {
        try {
            const updatedTask = await updateTask(id, { title });
            setTasks(
                tasks.map((task) => (task.id === id ? updatedTask : task))
            );
            setCurrentTask(null);
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };

    const deleteTaskById = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const toggleTaskCompletion = async (id) => {
        const task = tasks.find((task) => task.id === id);
        try {
            const updatedTask = await updateTask(id, {
                completed: !task.completed,
            });
            setTasks(
                tasks.map((task) => (task.id === id ? updatedTask : task))
            );
        } catch (error) {
            console.error("Error toggling task completion:", error);
        }
    };

    return (
        <ChakraProvider>
            <Container>
                <Navbar />
                <TaskForm
                    addTask={addTask}
                    editTask={editTask}
                    currentTask={currentTask}
                />
                <TaskList
                    tasks={tasks}
                    onDelete={deleteTaskById}
                    onToggle={toggleTaskCompletion}
                    onEdit={setCurrentTask}
                />
            </Container>
        </ChakraProvider>
    );
};

export default App;
