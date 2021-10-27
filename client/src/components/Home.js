import React from "react";
/* Styles */
import Styles from '../styles/Home.module.css'
/* Components */
import Menu from "./Home/Menu.js";
import Cards from "./Home/Cards";
import Pagination from "./Home/Pagination";

const Home = () => {
    return (
        <div className={Styles.container} >
            <div className={Styles.container2} >
                <Menu />
                <Cards />
            </div>
            <div>
                <Pagination />
            </div> 
        </div>
    )
}

export default Home;