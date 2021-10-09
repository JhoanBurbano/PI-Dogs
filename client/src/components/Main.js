import React from "react";
import { Link } from "react-router-dom";
import mainStyles from '../styles/main.module.css'
console.log(mainStyles.background)

export default function Main(){
    return (
        /* El div Contenedor tiene la imagen */
        <div className={mainStyles.background} >
            {/* El boton dirige a la pagina principal (home) */}
            <Link to='/home'>
            <button className={mainStyles.bttn}>
                Home
            </button>
            </Link>
            {/* Un pequeño span que simula de footer (Dirige a mi Github) */}
            <span className={mainStyles.span}>Created by
                <a className={mainStyles.reset} 
                href='https://github.com/Xartiago' 
                target='_blank' 
                without rel="noreferrer"> Xartiago</a>
            </span>
        </div>
    )
}