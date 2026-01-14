import React from "react";

export default function Contact ({email, phone, show}) {

    return (

        show && (

            <>
                <h3>Contacto</h3>
                <p>Email: {email}</p>
                <p>Teléfono: {phone}</p>
            </>

        )

    )

}