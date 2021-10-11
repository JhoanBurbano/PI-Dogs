import React from "react";
import { Link } from "react-router-dom";
import mainStyles from '../styles/main.module.css'

export default function Main(){
    return (
        /* The container has the img */
        <div className={mainStyles.background} >
            {/* This button link home */}
            <Link to='/home'>
            <button className={mainStyles.bttn}>
                HOME
            </button>
            </Link>
            {/* My github account in other page */}
            <span className={mainStyles.span}>Created by
                <a className={mainStyles.reset} 
                href='https://github.com/Xartiago' 
                target='_blank' 
                without rel="noreferrer"> Xartiago</a>
            </span>
        </div>
    )
}