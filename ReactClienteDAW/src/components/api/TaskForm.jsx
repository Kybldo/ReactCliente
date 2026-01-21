import React, { useState } from "react";

export const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    completed: completed,
                    userId: 1, // Required by JSONPlaceholder
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add task");
            }

            const newTask = await response.json();

            // Call the callback to update the task list in parent
            if (onTaskAdded) {
                onTaskAdded(newTask);
            }

            // Reset form
            setTitle("");
            setCompleted(false);

        } catch (error) {
            console.error("Error adding task:", error);
            alert("Error adding task. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <br/><br/>

                <label htmlFor="completed">Completada: </label>
                <select
                    id="completed"
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value === "true")}
                >
                    <option value="false">No completada</option>
                    <option value="true">Completada</option>
                </select>

                <br/><br/>

                <input
                    type="submit"
                    value={isSubmitting ? "Guardando..." : "Guardar"}
                    disabled={isSubmitting}
                />
            </form>
        </>
    );
};