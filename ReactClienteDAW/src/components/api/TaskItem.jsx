import React from 'react';

export const TaskItem = ({task}) => {

    return (

        <>

            <li>

                {task.title} : {task.completed ? "Completada" : "No completada"}

            </li>

        </>

    )

}