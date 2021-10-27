const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    getDogs,
    getMoods,
    getIdDog,
    createDog
} = require('./controller.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogs)
router.get('/temperament', getMoods) // <-- []
router.get('/dogs/:id', getIdDog)
router.post('/dogs', createDog)

module.exports = router;