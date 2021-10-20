import React from "react";
/* Styles */
import Styles from '../styles/Home.module.css'
/* Components */
import Menu from "./Home/Menu.js";
import Cards from "./Home/Cards";

const Home = () => {
    return (
        <div className={Styles.container} >
            <Menu />
            <Cards />
        </div>
    )
}

export default Home;