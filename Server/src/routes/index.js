const { Router } = require('express')

const getCharById = require('../controllers/getCharById')
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites')
const login = require('../controllers/login')

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/fav', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id',deleteFav)

module.exports = router;