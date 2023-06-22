const Router = require('express')
const router = new Router()
const internshipController = require('../controllers/internshipController')

router.post('/', internshipController.create)
router.get('/', internshipController.getAll)
router.get('/:id', internshipController.getOne)

module.exports = router