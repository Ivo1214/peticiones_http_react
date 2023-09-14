import React, {useState} from 'react';
import axios from 'axios';

const CreateUserForm = () => {
    const [mensaje, setMensaje] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value
        }
        if (!user.first_name || !user.last_name) {
            setMensaje("Please fill in all the fields.");
            return;
          }

        axios.post('https://reqres.in/api/users',user)
        .then(function (response) {
            console.log(response);
            setMensaje("Added user");
        })
        .catch(function (error) {
            console.log(error);
            setMensaje("Error trying to create user");
        });
        
        setLast_name("");
        setFirst_name("");
    };

    function handleReset (){
        setLast_name("");
        setFirst_name("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
                </label>
                <br />
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Reset" onClick={handleReset} />
            </form>
            <p>{mensaje}</p>
        </>
    );
};

export default CreateUserForm;