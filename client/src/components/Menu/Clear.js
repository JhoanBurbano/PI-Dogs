import React from 'react'
/* Styles */
import Styles from '../../styles/Menu/clear.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { clear } from '../../redux/actions'

const Clear = ({ clear }) => {
    return (
        <div className={Styles.container} >
            <button className={Styles.bttn} onClick={clear} >CLEAR</button>
        </div>
    )
}

export default connect(null, { clear })(Clear)