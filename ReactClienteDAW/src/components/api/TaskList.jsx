import React, { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem.jsx";
import { TaskForm } from "./TaskForm.jsx";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    const handleTaskAdded = (newTask) => {
        const taskWithTempId = {
            ...newTask,
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
        };
        setTasks([...tasks, taskWithTempId]);
    };

    return (
        <>
            <h2>Lista de tareas: </h2>

            <TaskForm onTaskAdded={handleTaskAdded} />

            <br/><br/>

            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </>
    );
};