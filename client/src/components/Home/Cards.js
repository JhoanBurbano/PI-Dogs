import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/* Styles */
import Styles from '../../styles/Home/cards.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { bringDogs, bringDogDetails, getPages, showEspPage } from "../../redux/actions";
/* Component */
import Card from "./Card";

const Cards = ({ dogs, pageToShow, bringDogs, bringDogDetails, getPages, showEspPage }) => {
    /* Bring all dogs */
    useEffect(() => {
        async function getDogs() {
            const allDogs = await bringDogs()
            return allDogs
        }
        getDogs()
    }, [bringDogs])
    /* Pagination */
    useEffect(() => {
        getPages()
        showEspPage(0)
    }, [dogs])

    while (!pageToShow) {
        return (<div className={Styles.container2} >Cargando...</div>)
    }
    return (
        <div className={Styles.container} >
            {pageToShow.map(dog => {
                const bringDog = () => {
                    bringDogDetails(dog.id)
                }
                return (<Link onClick={bringDog} key={dog.id} className={Styles.link} to={`/home/${dog.id}`}>
                    <Card
                        name={dog.name}
                        imagen={dog.img}
                        temperament={dog.temperament}
                        weight={dog.weight}
                    />
                </Link>)
            })}
        </div>
    )
}
const mapStateToProps = ({ dogs, pageToShow, pages }) => ({
    dogs,
    pageToShow
})

export default connect(mapStateToProps, { bringDogs, bringDogDetails, getPages, showEspPage })(Cards)