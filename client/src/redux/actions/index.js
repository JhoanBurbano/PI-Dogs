/* axios parser */
import axios from 'axios';
/* action types */
import {
    DOG,
    FILTER,
    GETDOGS,
    GETTEMPS,
    HEAVY,
    LIGHT,
    ORDERA,
    ORDERD,
    PAGES,
    SEARCH,
    SHOWPAGE
} from '../actionsType';
/* Server Backend */
const server = 'http://localhost:3002'

/* Dogs in the server 3002 */
export const bringDogs = () => {
    return async function (dispatch) {
        /* server back */
        let serverDogs = `${server}/dogs`;
        const response = await axios(serverDogs);
        const data = response.data.map(dato => {
            if (dato.createdInDB === true) {
                let temperament = dato.temperaments.map(temp => temp.name)
                let joinTemps = temperament.join(', ')
                return {
                    id: dato.id,
                    temperament: joinTemps,
                    img: dato.img,
                    name: dato.name,
                    weight: `${dato.minWeight} - ${dato.maxWeight}`,
                    height: `${dato.minHeight} - ${dato.maxHeight}`,
                    createdInDB: true,
                    lifeExp: `${dato.lifeExp} years`
                }
            }
            if (!dato.weight.includes('NaN')) return dato
            return null
        }).filter(Boolean);
        return dispatch({
            type: GETDOGS,
            payload: data
        })
    }
}
/* Temperaments in the server 3002 */
export const bringTemperaments = () => {
    return async function (dispatch) {
        let serverTemps = `${server}/temperament`;
        const response2 = await axios(serverTemps);
        const data2 = response2.data
        return dispatch({
            type: GETTEMPS,
            payload: data2
        })
    }
}
/* Create a new dog into the DB */
export const createDog = async (state) => {
    try{
        let newDogInServer = `${server}/dogs`
        await axios.post(newDogInServer, state)
        return window.alert(`The dog ${state.name} has been created`)
    }
    catch{
        return window.alert('Error in the process')
    }
}
/* Get especific page */
export const showEspPage = (page) => { return { type: SHOWPAGE, payload: page } }
/* Get pages */
export const getPages = () => { return { type: PAGES } }
/* Bring dog details */
export const bringDogDetails = (id) => { return { type: DOG, payload: id } }
/* Search by Name */
export const search = (name) => { return { type: SEARCH, payload: name } }
/* Filter by */
export const filterBy = (arg) => { return { type: FILTER, payload: arg } }
/* Order descendent (A-Z) */
export const orderD = () => { return { type: ORDERD } }
/* Order Ascendent (Z-A) */
export const orderA = () => { return { type: ORDERA } }
/* Order heavy to light */
export const orderHeavy = () => { return { type: HEAVY } }
/* Order light to heavy */
export const orderLight = () => { return { type: LIGHT } }
