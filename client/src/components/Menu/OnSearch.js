import React from 'react'
/* Hooks */
import { useState } from 'react'
/* Styles */
import Styles from '../../styles/Menu/onSearch.module.css'

const OnSearch = () => {

    const [state, setState] = useState({
        search: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
    }
    return(
        <div className = { Styles.container } >
            <span>Search breed</span>
            <form>
                <label className={Styles.label} >
                    <input
                        className={Styles.input}
                        id='search'
                        name='search'
                        placeholder='Search...'
                        value={state.search}
                        onChange={handleChange} />
                    <button className={Styles.button}>Find</button>
                </label>
            </form>
        </div >
    )
}

export default OnSearch