import React from "react";

export const Profile = ({name, age, profession}) => {

    return (

        <>

            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>

        </>

    )

}