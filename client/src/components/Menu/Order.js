import React from 'react'
/*  Styles */
import Styles from '../../styles/Menu/order.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { orderA, orderD, orderLight, orderHeavy } from '../../redux/actions'

const Order = ({ orderA, orderD, orderLight, orderHeavy }) => {
    return (
        <div className={Styles.container} >
            <span>Order By</span>
            <p className={Styles.litSpan} >Alphabetic</p>
            <div>
                <button className={Styles.bttns} onClick={orderD} >A-Z</button>
                <button className={Styles.bttns} onClick={orderA} >Z-A</button>
            </div>
            <p className={Styles.litSpan}>Weight</p>
            <div>
                <button className={Styles.bttns} onClick={orderLight} >-KG</button>
                <button className={Styles.bttns} onClick={orderHeavy} >+KG</button>
            </div>
        </div>
    )
}

export default connect(null, { orderA, orderD, orderLight, orderHeavy })(Order)