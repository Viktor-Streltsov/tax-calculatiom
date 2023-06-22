const Router = require('express')
const router = new Router()
const userInternshipController = require('../controllers/userInternshipController')

router.post('/', userInternshipController.create)
router.get('/', userInternshipController.getAll)
router.get('/:id', userInternshipController.getOne)
router.get('/user/:userId', userInternshipController.getUserAll)

module.exports = router