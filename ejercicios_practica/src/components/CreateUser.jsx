import React, {useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [mensaje, setMensaje] = useState("");

    function handleCreateUser(){
        const newUser = {
            name: "Juan Carlos",
            job: "Developer",
          };
        try {
            axios.post('https://reqres.in/api/users',newUser)
            .then(function (response) {
                console.log(response);
                setMensaje("Added user");
            })
            .catch(function (error) {
                console.log(error);
                setMensaje("Error trying to create user");
            });
        }
        catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
            <button onClick={handleCreateUser}>Crear usuario</button>
            <p>{mensaje}</p>
        </>
    );
};

export default CreateUser;