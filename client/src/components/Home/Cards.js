import React, { useEffect } from "react";
/* Styles */
import Styles from '../../styles/Home/cards.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { bringDogs } from "../../redux/actions";
/* Component */
import Card from "./Card";

const Cards = ({ dogs, bringDogs }) => {
    /* Bring all dogs */
    useEffect(() => {
        async function getDogs(){
            const allDogs = await bringDogs()
            return allDogs
        }
        getDogs()
    }, [bringDogs])
    return (
        <div className={Styles.container} >
            {dogs.map(dog => (<Card 
                                key={dog.id}
                                name={dog.name}
                                imagen={dog.img}
                                temperament={dog.temperament}
                                weight = {dog.weight}
                             />))}
        </div>
    )
}
const mapStateToProps = ({ dogs }) => ({
    dogs
})

export default connect(mapStateToProps, { bringDogs })(Cards)