import React from 'react'
/* Styles */
import Styles from '../../styles/Menu/filter.module.css'

export default function Filter() {
    return (
        <div className={Styles.container} >
            <span>Filter dogs</span>
            <select className={Styles.select} name='filter' >
                <option value='value1'>Value 1</option>
                <option value='value2'>Value 2</option>
                <option value='value3'>Value 3</option>
                <option value='value4'>Value 4</option>
                <option value='value5'>Value 5</option>
                <option value='value6'>Value 6</option>
            </select>
        </div>
    )
}
