/* Functions */
const {
    getAllDogs,
    setMoods
} = require('./functions.js')
/* Get db Models */
const { Dog, Mood, Op } = require('../db');

/* getAppDogs */
const getDogs = async (req, res) => {
    try {
        /* const name is a query parameter in the url */
        const { name } = req.query;
        const response = await getAllDogs(); // Here we get all dogs, both in the DB and in the API
        if (name) { // if name exists we going to do this
            let dogsByName = response.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase())) // Verify if any dog includes this name
            dogsByName ? res.status(200).json(dogsByName) // if exists we return this/these dogs
                : res.status(404).json({ msg: 'Dog not Found' }) // else we return a msg
        } else {
            res.status(200).json(response); // if dont find something in the query give me all dogs
        }
    }
    catch (err) {
        res.send(err);
    }
}
/* Push all temperaments into DB */
const getMoods = async (req, res) => {
    try {
        const moods = await setMoods(); // give me all moods or temperaments
        moods.forEach(mood => {    // we going to create by mood a tuple into the DB
            Mood.findOrCreate({
                where: { name: mood }
            })
        })
        const allMoods = await Mood.findAll(); // bring in this const all moods 
        res.status(200).json(allMoods); // 
    }
    catch (err) {
        res.send(400).json(err);
    }
}
/* Find exclusivly the id dog in the api */
const getIdDog = async (req, res) => {
    try {
        /* const id is a parameter in the url */
        const { id } = req.params;
        const dogs = await getAllDogs();
        if (id) {
            const dog = dogs.filter(dog => dog.id == id)
            dog.length ? res.send(dog)
                : res.status(404).send('Dog not found');
        }
    }
    catch (err) {
        console.log(err)
    }
}
/* Create a new dog */
/* The data of this dog we must send to the DB */
const createDog = async (req, res) => {
    console.log(req.body)
    try {
        const {
            name,
            height,
            weight,
            lifeExp,
            temperament
        } = req.body // Get from body form the information about this new dog
        const newDog = await Dog.create({ // we create the dog into the DB
            name,
            height,
            weight,
            lifeExp
        })
        console.log(req.body)
        const dogsMoods = await Mood.findAll({ // We verify if this temperament(s) exists into the DB
            where: { name: temperament }
        })
        newDog.addMood(dogsMoods);
        res.send('A new Dog has been added')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getDogs,
    getMoods,
    getIdDog,
    createDog
}