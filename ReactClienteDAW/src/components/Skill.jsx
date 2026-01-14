import React from "react";

export default function Skill ({array, show}) {

    return (

        show && (

            <ul>

                {array.map(skill => (<li key={skill}>{skill}</li>))}

            </ul>

        )

    )

}