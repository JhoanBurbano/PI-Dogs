import React from 'react'
/* Styles */
import Styles from '../../styles/Home/pagination.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { showEspPage } from '../../redux/actions'

const Pagination = ({ pages, showEspPage }) => {
    return (
        <div className={Styles.container} >
            {pages.map((arr, i) => {
                const onClickChange = (e) => {
                    showEspPage(e.target.value)
                }
                let j = i + 1
                return (<button onClick={onClickChange} key={i} className={Styles.bttn} value={i} >{j}</button>)
            })}
        </div>
    )
}
const mapStateToProps = ({ pages }) => ({
    pages
})

export default connect(mapStateToProps, { showEspPage })(Pagination)