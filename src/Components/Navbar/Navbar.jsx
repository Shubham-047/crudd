import React from 'react'
import styles from "./navbar.module.css"
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.nav_cont}>
                    <button><NavLink to="./" exact>All Users</NavLink></button>
                    <button><NavLink to="./add" exact>Add User</NavLink></button>
                </div>
            </div>
        </div>
    )
}
