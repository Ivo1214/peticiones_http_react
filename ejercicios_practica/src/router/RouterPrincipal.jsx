import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "../views/Error404";
import Nav from '../components/Nav/Nav';
import CreateUser from '../components/CreateUser';
import CreateUserForm from '../components/CreateUserForm';
import GetUsers from '../components/GetUsers';



const RouterPrincipal = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path='/create' element={<CreateUser></CreateUser>}/>
                <Route path='/form' element={<CreateUserForm></CreateUserForm>}/>
                <Route path='/' element={<GetUsers></GetUsers>}/>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </Router>
    );
};

export default RouterPrincipal;