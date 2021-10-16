import React from 'react'
/* Styles */
import Styles from '../../styles/Home/Menu.module.css'
/* Components */
import OnSearch from '../Menu/OnSearch.js'
import Filter from '../Menu/Filter'
import Order from '../Menu/Order'


export default function Menu() {
    return (
        <div className={Styles.container}>
            <OnSearch />
            <Filter />
            <Order />
        </div>
    )
}