// src/components/TaskForm.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Flex,
    useToast,
} from "@chakra-ui/react";
import "./TaskForm.css";
import { useTranslation } from "react-i18next";

const TaskForm = ({ addTask, editTask, currentTask }) => {
    const { i18n, t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            title: currentTask ? currentTask.title : "",
        },
    });

    useEffect(() => {
        if (currentTask) {
            reset({ title: currentTask.title });
        }
    }, [currentTask, reset]);

    const toast = useToast();

    const onSubmit = (data) => {
        if (currentTask) {
            editTask(currentTask.id, data.title);
            toast({
                title: 'Update Successful',
                description: 'Task has been updated successfully.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } else {
            addTask(data.title);
            toast({
                title: 'Add Successful',
                description: 'Task has been added successfully.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex position="relative">
                <FormControl isInvalid={!!errors.title}>
                    <FormLabel htmlFor="title"></FormLabel>
                    <Input
                        id="title"
                        placeholder={t("Enter your task")}
                        {...register("title", {
                            required: t("Please do not leave it blank!"),
                        })}
                    />
                    <FormErrorMessage>
                        {errors.title && errors.title.message}
                    </FormErrorMessage>
                </FormControl>
                <Button
                    h={10}
                    colorScheme="teal"
                    type="submit"
                    className="mul-btn"
                >
                    {currentTask ? t("Update") : t("Add New")}
                </Button>
            </Flex>
        </form>
    );
};

export default TaskForm;
