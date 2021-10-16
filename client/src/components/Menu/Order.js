import React from 'react'
/*  Styles */
import Styles from '../../styles/Menu/order.module.css'

export default function Order() {
    return (
        <div className={Styles.container} >
            <span>Order By</span>
            <p className={Styles.litSpan} >Alphabetic</p>
            <div>
                <button className={Styles.bttns} >A-Z</button>
                <button className={Styles.bttns} >Z-A</button>
            </div>
            <p className={Styles.litSpan}>Weight</p>
            <div>
                <button className={Styles.bttns} >+KG</button>
                <button className={Styles.bttns} >-KG</button>
            </div>
        </div>
    )
}