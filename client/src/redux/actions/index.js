/* axios parser */
import axios from 'axios';
/* action types */
import {
    FILTER,
    GETDOGS,
    GETTEMPS,
    HEAVY,
    LIGHT,
    ORDERA,
    ORDERD
} from '../actionsType';
/* Server Backend */
const server = 'http://localhost:3002/'

/* Dogs in the server 3002 */
export const bringDogs = () => {
    return async function (dispatch) {
        /* server back */
        let serverDogs = `${server}dogs`;
        const response = await axios(serverDogs);
        const data = response.data.map(dato => {
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
        let serverTemps = `${server}temperament`;
        const response2 = await axios(serverTemps);
        const data2 = response2.data
        return dispatch({
            type: GETTEMPS,
            payload: data2
        })
    }
}
/* Filter by */
export const filterBy = (arg) => {
    return { type: FILTER, payload: arg }
}
/* Order descendent (A-Z) */
export const orderD = () => { return { type: ORDERD } }
/* Order Ascendent (Z-A) */
export const orderA = () => { return { type: ORDERA } }
/* Order heavy to light */
export const orderHeavy = () => { return { type: HEAVY } }
/* Order light to heavy */
export const orderLight = () => { return { type: LIGHT } }