/* Action types */
import {
    FILTER,
    GETDOGS,
    GETTEMPS,
    HEAVY,
    LIGHT,
    ORDERA,
    ORDERD
} from '../actionsType'
/* State */
const initialState = {
    temperaments: [],
    dogs: [],
    auxFilter: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    const auxDogs = state.dogs.map(dog => dog)
    switch (type) {
        case GETDOGS: /* Bring dogs  */
            return {
                ...state,
                dogs: payload,
                auxFilter: payload
            }
        case GETTEMPS: /* Bring Temperaments */
            return {
                ...state,
                temperaments: payload
            }
        case FILTER:
            const dogs = state.auxFilter.filter(dog => {
                if (payload.toLowerCase() === 'api' && !dog.createInDB) return dog
                if (payload.toLowerCase() === 'data base' && dog.createInDB === true) return  dog
                if (dog.temperament && dog.temperament.includes(payload)) return dog
                return null
            }
            ).filter(Boolean)
            console.log(state.auxFilter)
            return {
                ...state,
                dogs: dogs
            }
        case ORDERD: /* A-Z */
            const orderD = auxDogs.sort((prev, post) => {
                if (prev.name < post.name) return -1;
                else if (prev.name > post.name) return 1;
                else return 0
            });
            return {
                ...state,
                dogs: orderD
            }
        case ORDERA: /* Z-A */
            const orderA = auxDogs.sort((prev, post) => {
                if (prev.name < post.name) return 1;
                else if (prev.name > post.name) return -1;
                else return 0
            });
            return {
                ...state,
                dogs: orderA
            }
        case LIGHT: /* lighter to heavier */
            const orderLight = auxDogs.sort((prev, post) => {
                let lighterL = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                let heavierL = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                return lighterL - heavierL
            })
            return {
                ...state,
                dogs: orderLight
            }
        case HEAVY: /* heavier to lighter */
            const orderHeavy = auxDogs.sort((prev, post) => {
                let lighterH = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                let heavierH = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                return lighterH + heavierH
            })
            return {
                ...state,
                dogs: orderHeavy
            }
        default:
            return state
    }
}
