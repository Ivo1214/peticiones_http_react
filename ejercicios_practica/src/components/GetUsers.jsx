import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GetUsers = () => {
    const [users, setUsers] = useState();

    
    useEffect(() => {
        async function fetchData() {
            try {
              const datos = await axios.get('https://reqres.in/api/users');
              console.log(datos);
              setUsers(datos.data.data);
            } catch (error) {
              console.error('Error:', error);
            }
          }
          
        fetchData();
    },[])

    return (
        <>
            {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar}></img>
                    <p>Full Name: {user.first_name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))
            ) : (
            <p>Loading...</p>
            )}

        </>
    );
};

export default GetUsers;