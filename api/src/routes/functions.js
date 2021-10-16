/* Axios */
const axios = require('axios')
/* Api Key */
const { API_KEY } = process.env;
const api = 'https://api.thedogapi.com/v1/breeds?api_key='
const { Dog, Mood, Op } = require('../db');

/* Get all api dogs*/
const getApiDogs = async () => {
    const response = await axios(`${api}${API_KEY}`);
    const dogs = response.data.map(dog => ({
        id: dog.id,
        name: dog.name,
        img: dog.image.url,
        temperament: dog.temperament,
        weight: dog.weight.metric,
        height: dog.height.metric,
        lifeExp: dog.life_span
    }))
    return dogs;
}
/* Get data base dogs */
const getDBDogs = async () => {
    return await Dog.findAll({
        include: {
            model: Mood,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}
/* get All Dogs */
const getAllDogs = async () => {
    const apiDogs = await getApiDogs(); // async function get de api dogs
    const dbDogs = await getDBDogs();  // async function get the db dogs
    const allDogs = apiDogs.concat(dbDogs); // or [...apiDogs, ...dbDogs]
    return allDogs;
}
/* Get All moods */
/* This function give me all the moods in a single array (But here they repeat)*/
const getTemperaments = async () => {
    const getDogs = await getApiDogs(); // get all dogs from api
    const getTemps = getDogs.map(dog => {
        if(!dog.temperament){ // if is undefined 
            return dog.temperament // return me undefined
        }
        const aux = dog.temperament.split(', ') // as the temperament for each dog is a texxt string we going to create an array by dogTemp
        return aux // return this array in getTemps
    })
    const finalMoods = getTemps.flat() // all subArrays become in a single array
    return finalMoods
}
/* Set Moods */
/* Here we clear the array that we push into de DB */
const setMoods = async () =>{
    let moods = await getTemperaments();
    const cleaning = new Set(moods) // clean the repeat values
    let final = [...cleaning].filter(Boolean) // clean all boleans (null, undefined, false, etc..) in the arr
    return final 
}

module.exports = {
    getAllDogs,
    setMoods
}