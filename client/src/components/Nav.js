import React from "react";
import { Link } from "react-router-dom";
/* Estyles */
import styles from '../styles/nav.module.css'
/* Imgs & assts*/
import Icon from '../assets/icons/ICONO.png'
import personalMark from '../assets/icons/personalMark.png'

export default function Nav() {
    return (
        <div className={styles.container}>
            {/* Nav to home */}
            <Link to='/home' className={styles.reset}>
                <div className={styles.home}>
                    <img className={styles.img} src={Icon} alt='Icono' width='100%'/>
                    <span className={styles.padding}>Home</span>
                </div>
            </Link>
            {/* Blank to my github */}
            <div>
                <a 
                href='https://github.com/Xartiago'
                alt='Personal Mark'
                target='_blank'
                rel="noreferrer"
                ><img className={styles.img2} src={personalMark} alt='personal Mark'/>
                </a>
            </div>
            {/* Nav to create new dog or breed */}
            <Link to='/create'>
                <button className={styles.bttn}>
                    Create Dog
                </button>
            </Link>
        </div>
    )
}