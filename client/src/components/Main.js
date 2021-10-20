import React from "react";
import { Link } from "react-router-dom";
import mainStyles from '../styles/main.module.css'

const Main = () => {
    return (
        /* The container has the img */
        <div className={mainStyles.background} >
            {/* This button link home */}
            <Link to='/home'>
                <button className={mainStyles.bttn}>
                    HOME
                </button>
            </Link>
            {/* Blank to my github acc */}
            <span className={mainStyles.span}>Created by
                <a className={mainStyles.reset}
                    href='https://github.com/Xartiago'
                    target='_blank'
                    without rel="noreferrer"> Xartiago</a>
            </span>
        </div>
    )
}

export default Main;