import React from 'react';
import style from './nav.module.css';
import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className={style.nav}>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Get</NavLink>
                </li>
                <li>
                    <NavLink to='/create' className={({ isActive }) => (isActive ? "active" : "")}>Create</NavLink>
                </li>
                <li>
                    <NavLink to='/form' className={({ isActive }) => (isActive ? "active" : "")}>Form</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;